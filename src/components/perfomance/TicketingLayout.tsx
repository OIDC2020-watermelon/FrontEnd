import React, { useEffect, useState } from 'react';
import { Divider, Row, Col } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { DatePicker, SelectAbleTime, SelectAbleSeat } from './ticketing';
import SelectSeatModal from './book/BookModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../models';
import { Moment } from 'moment';
import {
  getPerformance,
  getPerformanceTicket,
} from '../../models/saga/reducers/performance';
import { useRouteMatch } from 'react-router-dom';

export default function TicketingLayout() {
  const [selectedDate, setSelectedDate] = useState<Moment>(moment(Date.now()));
  const [selectedSession, setSelectedSession] = useState<any>();
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { id } = useRouteMatch().params as any;
  const data = useSelector(
    (state: RootState) => state.performance.product.data,
  );
  useEffect(() => {
    dispatch(getPerformance.request({ productId: id }));
  }, [id, dispatch]);
  useEffect(() => {
    if (selectedSession) {
      dispatch(
        getPerformanceTicket.request({ performanceId: selectedSession?.id }),
      );
    }
  }, [dispatch, selectedSession?.id]);

  return (
    <>
      <Divider orientation="center">예매하기</Divider>
      <S.CenterContainer>
        <S.DatePickerWrap span={10}>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ableStartDate={data?.releaseStartTime}
            ableEndDate={data?.releaseEndTime}
            setVisible={setVisible}
            setSelectedSession={setSelectedSession}
          />
        </S.DatePickerWrap>

        <Col span={14}>
          <S.DateOpsContainer>
            <Col span={11}>
              <SelectAbleTime
                selectedDate={selectedDate}
                setSelectedSession={setSelectedSession}
                selectedSession={selectedSession}
                setVisible={setVisible}
              />
            </Col>
            <Col span={11}>
              <SelectAbleSeat
                setSelectedSession={setSelectedSession}
                visible={visible}
              />
            </Col>
          </S.DateOpsContainer>

          <Row>
            <Col span={24}>
              <SelectSeatModal selectedSession={selectedSession} />
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
