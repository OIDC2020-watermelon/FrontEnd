import React from 'react';
import { Divider, Button, Row, Col, Layout } from 'antd';
import styled from 'styled-components';
import { DatePicker, SelectAbleTime, SelectAbleSeat } from './ticketing';

const { Header, Footer, Sider, Content } = Layout;
export default function TicketingLayout() {
  const date = Date.now();
  return (
    <>
      <Divider orientation="center">예매하기</Divider>
      <S.CenterContainer>
        <S.DatePickerWrap span={10}>
          <DatePicker />
        </S.DatePickerWrap>

        <Col span={14}>
          <S.DateOpsContainer>
            <Col span={11}>
              <SelectAbleTime />
            </Col>
            <Col span={11}>
              <SelectAbleSeat />
            </Col>
          </S.DateOpsContainer>

          <Row>
            <Col span={24}>
              <S.AntdButton type="primary" block>
                예약하기
              </S.AntdButton>
            </Col>
          </Row>
        </Col>
      </S.CenterContainer>
    </>
  );
}

const S: any = {};

S.CenterContainer = styled(Row)`
  padding: 1rem 5rem;
  @media screen and (max-width: 950px) {
    padding: 1rem 1rem;
  }
`;

S.DatePickerWrap = styled(Col)`
  padding-right: 4rem;
`;

S.DateOpsContainer = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

S.AntdButton = styled(Button)`
  border-radius: 5px;
`;
