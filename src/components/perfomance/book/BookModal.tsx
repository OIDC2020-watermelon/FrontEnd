import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import TicketSeatPicker from './TicketSeatPicker';
import TicketPayment from './TicketPayment';

export default function BookModal() {
  const [visible, setVisible] = useState(false);
  const [selectModal, setSelectModal] = useState('1');

  const [selectedSeat, setSelectedSeat] = useState<Array<any>>([]);

  const showModalOne = () => {
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
    setVisible(false);
  };

  const handleOneOk = (e: any) => {
    console.log(e);
    showModalTwo();
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  useEffect(() => {});

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
          <TicketPayment selectedSeat={selectedSeat} />
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
