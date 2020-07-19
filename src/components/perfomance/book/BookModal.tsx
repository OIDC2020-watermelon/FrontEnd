import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import TicketSeatPicker from './TicketSeatPicker';

export default function BookModal() {
  const [visible, setVisible] = useState(false);
  const [selectModal, setSelectModal] = useState('1');

  const showModalOne = () => {
    setVisible(true);
    setSelectModal('1');
  };
  const showModalTwo = () => {
    setSelectModal('2');
  };

  const handleOneOk = (e: any) => {
    console.log(e);
    if (selectModal === '1') {
      showModalTwo();
    } else if (selectModal === '2') {
      setVisible(false);
    }
  };

  const handleTwoOk = (e: any) => {
    console.log(e);
    setSelectModal('1');
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(true);
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
        onOk={handleOneOk}
        onCancel={handleCancel}
        okText={
          selectModal === '1' ? '다음' : selectModal === '2' ? '결제' : '오류'
        }
        cancelText="취소"
      >
        <TicketSeatPicker />
      </Modal>
    </div>
  );
}

const S: any = {};

S.AntdButton = styled(Button)`
  border-radius: 5px;
`;
