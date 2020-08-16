import React, { useMemo } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';
import { useAuth } from '../../../models/hook/providers/auth/AuthProvider';

export default function TicketPayment({ selectedSeat, selectedSession }: any) {
  const [{ data: user }] = useAuth();
  const alignStyle = useMemo(
    () => ({ display: 'flex', justifyContent: 'space-between' }),
    [],
  );
  console.log('selectedSession', selectedSession);
  return (
    <>
      <S.Container>
        <S.PaymentContainer>
          <h2>결제 금액</h2>
          <S.ContentTitleWrap>
            <h5>기본정보</h5>
            <h5>가격</h5>
          </S.ContentTitleWrap>

          <S.ContentBodyWrap>
            <div>
              {selectedSeat.map((seat: any) => (
                <li style={alignStyle}>
                  <span>{`${seat.row}-${seat.number}`}</span>
                  <span>{`${seat.grade}`}</span>
                  <span>{`${seat.cost}`}</span>
                </li>
              ))}
            </div>
            <div style={alignStyle}>
              <span>{`총 가격 : `}</span>
              <span>{`${selectedSeat[0].cost * selectedSeat.length}원`}</span>
            </div>
          </S.ContentBodyWrap>
        </S.PaymentContainer>
        <S.TicketerContainer>
          <h2>예매자 확인</h2>
          <S.ContentTitleWrap>
            <h5>기본 정보</h5>
            <h5>결제 정보</h5>
          </S.ContentTitleWrap>
          <div>
            <S.ContentBodyWrap>
              <S.StyledAntdInput placeholder="이름" value={user?.name} />
              <S.StyledAntdInput
                placeholder="생년월일"
                value={user?.dateOfBirth}
              />
              <S.StyledAntdInput placeholder="연락처" value={user?.phoneNo} />
              <S.StyledAntdInput placeholder="이메일" value={user?.uid} />
            </S.ContentBodyWrap>
          </div>
        </S.TicketerContainer>
      </S.Container>
    </>
  );
}
const S: any = {};
S.Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
S.PaymentContainer = styled.div`
  width: 30%;
  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
S.ContentTitleWrap = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  border-top: 2px solid ${palette.gray5};
  border-bottom: 1px solid ${palette.gray3};
  & > h5 {
    font-weight: bold;
  }
`;
S.ContentBodyWrap = styled.div`
  width: 100%;
  height: 10rem;
  overflow: auto;
  margin-top: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${palette.gray5};
  padding: 0.5rem;
`;

S.TicketerContainer = styled.div`
  width: 65%;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

S.PaymentInfoWrap = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  border-top: 2px solid ${palette.gray8};
  border-bottom: 1px solid ${palette.gray8};
`;

S.StyledAntdInput = styled(Input)`
  margin-bottom: 0.3rem;
  &:last-child {
    margin: 0;
  }
`;
