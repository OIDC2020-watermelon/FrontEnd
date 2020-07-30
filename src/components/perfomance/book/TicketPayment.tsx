import React, { useMemo } from 'react';
import { Select, Input } from 'antd';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';

const { Option } = Select;

export default function TicketPayment({ selectedSeat }: any) {
  const alignStyle = useMemo(
    () => ({ display: 'flex', justifyContent: 'space-between' }),
    [],
  );
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
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
                  <span>10,000</span>
                </li>
              ))}
            </div>
            <div style={alignStyle}>
              <span>{`총 가격 : `}</span>
              <span>{`${selectedSeat.length * 10000}원`}</span>
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
              <S.StyledAntdInput placeholder="이름" />
              <S.StyledAntdInput placeholder="생년월일" />
              <S.StyledAntdInput placeholder="연락처" />
              <S.StyledAntdInput placeholder="이메일" />
            </S.ContentBodyWrap>
            <S.ContentBodyWrap>
              <Select
                placeholder="카드 종류"
                style={{ width: '7.8rem', marginBottom: '1rem' }}
                onChange={handleChange}
              >
                <Option value="A사 카드">A사 카드</Option>
                <Option value="B사 카드">B사 카드</Option>
                <Option value="C사 카드">C사 카드</Option>
              </Select>
              <Select
                placeholder="할부 종류"
                style={{ width: '7.8rem' }}
                onChange={handleChange}
              >
                <Option value="일시불">일시불</Option>
                <Option value="6개월 할부">6개월 할부</Option>
                <Option value="12개월 할부">12개월 할부</Option>
              </Select>
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
  width: 9rem;
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
