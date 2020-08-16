import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import TicketSeatPicker from './TicketSeatPicker';
import TicketPayment from './TicketPayment';
import { useAuth } from '../../../models/hook/providers/auth/AuthProvider';
import message from '../../../lib/utils/message';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models';
import { addReservation } from '../../../models/saga/reducers/reservation';
interface BookModalProps {
  selectedSession: any;
}
export default function BookModal({ selectedSession }: BookModalProps) {
  const [visible, setVisible] = useState(false);
  const [selectModal, setSelectModal] = useState('1');
  const [selectedSeat, setSelectedSeat] = useState<Array<any>>([]);
  const [{ data: user }] = useAuth();
  const { ticket, product } = useSelector((state: RootState) => ({
    ticket: state.performance.ticket,
    product: state.performance.product.data,
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  const showModalOne = () => {
    if (!user) {
      message('로그인 후 이용해주세요');
      return;
    } else if (
      ![user.dateOfBirth, user.gender, user.name, user.phoneNo].every(Boolean)
    ) {
      message('추가 정보를 입력해주세요.');
      history.push('/mypage');
    }
    if (!selectedSession) {
      message('세션을 골라주세요');
      return;
    }
    if (!ticket || ticket.length < 1) {
      message('티켓이 없습니다.');
      return;
    }

    setVisible(true);
    // 모달 초기화
    setSelectModal('1');
    setSelectedSeat([]);
  };
  const showModalTwo = () => {
    setSelectModal('2');
  };

  const handleTwoOk = (e: any) => {
    console.log(e);
    dispatch(
      addReservation.request({
        name: product.title,
        performanceId: selectedSession.id,
        ticketList: selectedSeat.map((item) => item.id),
      }),
    );
    setVisible(false);
  };

  const handleOneOk = (e: any) => {
    console.log(e);
    if (selectedSeat.length < 1) {
      message('좌석을 선택해주세요.');
      return;
    }
    showModalTwo();
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div>
      <S.AntdButton type="primary" block onClick={showModalOne}>
        예약하기
      </S.AntdButton>
      <Modal
        title={
          selectModal === '1'
            ? '1 좌석선택'
            : selectModal === '2'
            ? '2 결제'
            : '오류'
        }
        visible={visible}
        onOk={
          selectModal === '1'
            ? handleOneOk
            : selectModal === '2'
            ? handleTwoOk
            : undefined
        }
        onCancel={handleCancel}
        okText={
          selectModal === '1' ? '다음' : selectModal === '2' ? '결제' : '오류'
        }
        cancelText="취소"
      >
        {selectModal === '1' ? (
          <TicketSeatPicker
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
        ) : selectModal === '2' ? (
          <TicketPayment
            selectedSeat={selectedSeat}
            selectedSession={selectedSession}
          />
        ) : (
          '오류'
        )}
      </Modal>
    </div>
  );
}

const S: any = {};

S.AntdButton = styled(Button)`
  border-radius: 5px;
`;
