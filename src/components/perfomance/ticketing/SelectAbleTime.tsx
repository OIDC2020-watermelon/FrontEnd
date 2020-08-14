import React from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';
import { RootState } from '../../../models';
import { useSelector } from 'react-redux';
import moment from 'moment';

const data = [
  '13시 00분',
  '13시 00분',
  '14시 00분',
  '15시 00분',
  '16시 00분',
  '17시 00분',
];

function* filterDate(performance: any, selectedDate: any) {
  let index = 0;
  if (performance instanceof Array) {
    while (performance[index]) {
      if (
        moment(performance[index].availableDate).format('YYYY-MM-DD') ===
        moment(selectedDate).format('YYYY-MM-DD')
      ) {
        yield performance[index];
      }
      index++;
    }
  }
}

interface SelectAbleTimeProps {
  selectedDate: any;
}

export default function SelectAbleTime({ selectedDate }: SelectAbleTimeProps) {
  const performance = useSelector(
    (state: RootState) => state.performance.performance.data,
  );

  const items: any = [];
  const item: any = new Set();
  const ableDate: any = [];

  // 1. 해당 날짜의 공연만 뽑아온다.
  const iterator = filterDate(performance, selectedDate) as any;

  for (const date of iterator) {
    items.push(date);
  }
  console.log('performance', performance);
  return (
    <>
      <S.AntdList
        header={<div>회차를 선택해주세요</div>}
        bordered
        dataSource={data}
        className="scroll"
        renderItem={(item: any, i: number) => (
          <S.AntdListItem>
            <Typography.Text mark>{`[${i}회차]`}</Typography.Text> {item}
          </S.AntdListItem>
        )}
      />
    </>
  );
}

const S: any = {};

S.AntdList = styled(List)`
  height: 18rem;
  overflow: auto;
  border-radius: 5px;
`;

S.AntdListItem = styled(List.Item)``;
