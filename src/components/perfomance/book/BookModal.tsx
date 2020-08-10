import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import TicketSeatPicker from './TicketSeatPicker';
import TicketPayment from './TicketPayment';
import axios from 'axios';

export default function BookModal() {
  const [visible, setVisible] = useState(false);
  const [selectModal, setSelectModal] = useState('1');

  const [selectedSeat, setSelectedSeat] = useState<Array<any>>([]);

  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    console.log(process.env.REACT_APP_IMP_ID);
    IMP.init(process.env.REACT_APP_IMP_ID);

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1, // 결제금액
      name: '아임포트 결제 데이터 분석', // 주문명
      buyer_name: '홍길동', // 구매자 이름
      buyer_tel: '01012341234', // 구매자 전화번호
      buyer_email: 'example@example', // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response: any) {
    if (response.success) {
      // 결제 성공 시: 결제 승인 또는 가상계좌 발급에 성공한 경우
      // jQuery로 HTTP 요청
      axios({
        url: 'https://www.myservice.com/payments/complete', // 가맹점 서버
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          imp_uid: response.imp_uid,
          merchant_uid: response.merchant_uid,
        },
      }).then(function (data) {
        // 가맹점 서버 결제 API 성공시 로직
      });
    } else {
      alert('결제에 실패하였습니다. 에러 내용: ' + response.error_msg);
    }
  }

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
    onClickPayment();
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

  const loadScript = function () {
    if (document && document.querySelectorAll('#import_jquery').length === 0) {
      const script = document.createElement('script');
      script.id = 'import_jquery';
      script.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
      document.head.appendChild(script);
    }
    if (document && document.querySelectorAll('#import_module').length === 0) {
      const script = document.createElement('script');
      script.id = 'import_module';
      script.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
      document.head.appendChild(script);
    }
  };

  useEffect(() => {
    loadScript();
  }, []);

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
