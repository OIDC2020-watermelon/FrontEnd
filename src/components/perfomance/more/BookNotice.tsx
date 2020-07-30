import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';

export default function BookNotice() {
  return (
    <>
      <S.InfoContainer className="scroll">
        <S.InfoItemWrap>
          <S.InfoTitle>예매취소 시 유의사항</S.InfoTitle>
          <S.InfoContents>
            <li>
              취소 시 예매수수료는 예매 당일 밤 12시 이전까지 환불되며, 그 이후
              기간에는 환불되지 않습니다.
            </li>
            <li>
              웹 취소가능시간 이후에는 취소가 불가합니다. 단, 관람일 당일
              취소가능 한 상품의 경우 관람일 당일 취소 시에는 티켓금액의 90%가
              과금됩니다. 상품의 특성에 따라서, 취소수수료 정책이 달라질 수
              있습니다.
            </li>
            <li>
              (각 상품 예매 시 취소수수료 확인) 배송 및 반송처리 된 티켓의
              배송료는 환불되지 않습니다. 금주 주말 (토/일)공연 취소를 원할 경우
              내사수령 바랍니다. 우편으로 보낼 시 우체국이 토요일 근무를 안하는
              관계로 수취인 수령이 불가능하여 취소처리가 되지 않을 수 있습니다.
            </li>{' '}
            <li>
              취소는 관람일 하루 전(평일/주말/공휴일 오후 5시, 토요일 오전 11시
              이전)까지 직접 취소가 가능하며, 배송이 시작된 티켓의 경우 티켓이
              고객센터로 공연 전일까지 반송되어야 취소가능하며, 취소수수료는
              도착일자 기준으로 부과됩니다.
            </li>{' '}
            <li>
              (※ 단, 배송료는 환불되지 않으며 일괄배송 상품의 경우 취소에 대한
              자세한 문의는 고객센터로 문의해주시기 바랍니다.)
            </li>{' '}
            <li>
              (공연 전일이 휴일인 경우, 휴일 전날까지) 반송이 확인되지 않은
              티켓은 현장에서도 수령하실 수 없으며, 공연 관람 및 환불이
              불가합니다.
            </li>
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>환불안내</S.InfoTitle>
          <S.InfoContents>
            <li>
              신용카드 결제의 경우 일반적으로 당사의 취소 처리가 완료되고 4~5일
              후 카드사의 취소가 확인됩니다. (체크카드 동일) 예매 취소 시점과
              해당 카드사의 환불 처리기준에 따라 취소금액의 환급방법과 환급일은
              다소 차이가 있을 수 있으며, 예매 취소시 기존에 결제하였던 내역을
              취소하며 최초 결제하셨던 동일카드로 취소 시점에 따라 취소수수료와
              배송료를 재승인 합니다.
            </li>{' '}
            <li>
              환불 지연 등에 따른 배상급 지급에 대한 사항은 전자상거래 등에서의
              소비자 보호에 관한 법률 및 소비자기본법에 따른 소비자분쟁
              해결기준(공정위 고시)에 따르며 관련 문의는 고객센터로 연락주시기
              바랍니다.
            </li>
          </S.InfoContents>
        </S.InfoItemWrap>
      </S.InfoContainer>
    </>
  );
}

const S: any = {};

S.InfoContainer = styled.div`
  overflow: auto;
  border: 1px solid ${palette.gray5};
  height: 100%;
  width: 100%;
  padding: 4rem 5rem;
  border-radius: 5px;
`;

S.InfoItemWrap = styled.div`
  width: 100%;
  font-weight: bold;
  border-bottom: 2px solid ${palette.gray8};
  &:first-child {
    border-top: 2px solid ${palette.gray8};
  }
`;
S.InfoTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray4};
  font-weight: bold;
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
`;
