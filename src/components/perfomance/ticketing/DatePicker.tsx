import React from 'react';
import { Calendar, Alert } from 'antd';
import styled from 'styled-components';
import moment, { Moment } from 'moment';

interface DatePickerProps {
  ableStartDate?: Moment | number;
  ableEndDate?: Moment | number;
  selectedDate: any;
  setSelectedDate: any;
  setVisible: any;
  setSelectedSession: any;
}
export default function DatePicker({
  ableStartDate,
  ableEndDate,
  selectedDate,
  setSelectedDate,
  setSelectedSession,
  setVisible,
}: DatePickerProps) {
  function onPanelChange(date: Moment) {
    setVisible(false);
    setSelectedSession(null);
    setSelectedDate(date);
  }

  function disabledDate(date: Moment) {
    let start = ableStartDate || '2020-07-10';
    let end = ableEndDate || '2021-07-20';
    const now = moment(Date.now()).subtract(1, 'days');
    if (now > date) return true;
    if (date < moment(start)) {
      return true;
    } else if (date > moment(end).add(1, 'days')) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <S.CalendarContainer>
      <Alert
        message={`You selected date: ${
          selectedDate && selectedDate.format('YYYY-MM-DD')
        }`}
      />
      <Calendar
        fullscreen={false}
        mode="month"
        onChange={onPanelChange}
        disabledDate={disabledDate}
      />
    </S.CalendarContainer>
  );
}

const S: any = {};

S.CalendarContainer = styled.div`
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  & label:last-child {
    display: none;
  }
`;
