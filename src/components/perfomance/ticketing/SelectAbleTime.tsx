import React, { useCallback } from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';
import { RootState } from '../../../models';
import { useSelector } from 'react-redux';
import moment from 'moment';
import palette from '../../../lib/style/palette';

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
  setSelectedSession: any;
  setVisible: any;
  selectedSession: any;
}

export default function SelectAbleTime({
  selectedDate,
  setSelectedSession,
  setVisible,
  selectedSession,
}: SelectAbleTimeProps) {
  const onSessionChange = useCallback(
    (item: any) => () => {
      setSelectedSession(item);
      setVisible(true);
    },
    [setSelectedSession, selectedSession],
  );
  const performance = useSelector(
    (state: RootState) => state.performance.performance.data,
  );

  const items: any = [];

  // 1. 해당 날짜의 공연만 뽑아온다.
  const iterator = filterDate(performance, selectedDate) as any;

  // 2. 세션
  for (const date of iterator) {
    items.push(date);
  }
  items.sort((a: any, b: any) => {
    const startAtA = a.startAt;
    const startAtB = b.startAt;
    if (startAtA < startAtB) {
      return -1;
    }
    if (startAtA > startAtB) {
      return 1;
    }
    return 0;
  });
  console.log('items', items);
  return (
    <>
      <S.AntdList
        header={
          <div>
            {selectedSession
              ? `선택한 시간 : ${selectedSession.startAt}`
              : '회차를 선택해주세요'}
          </div>
        }
        bordered
        dataSource={items}
        className="scroll"
        renderItem={(item: any, i: number) => (
          <S.AntdListItem onClick={onSessionChange(item)}>
            <Typography.Text mark>{`[${i}회차]`}</Typography.Text>{' '}
            {item.startAt}
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

S.AntdListItem = styled(List.Item)`
  &:hover {
    background: ${palette.gray2};
    cursor: pointer;
  }
`;
