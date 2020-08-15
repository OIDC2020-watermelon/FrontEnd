import React from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../models';

function* seatArray(ticket: any) {
  let index = 0;
  if (ticket instanceof Array)
    while (ticket[index]) {
      if (!ticket[index].sold) yield ticket[index].grade;
      index++;
    }
}
interface SelectAbleSeatProps {
  visible: any;
  setSelectedSession: any;
}

export default function SelectAbleSeat({
  visible,
  setSelectedSession,
}: SelectAbleSeatProps) {
  const ticket = useSelector((state: RootState) => state.performance.ticket);

  const iterator = seatArray(ticket) as any;
  const items: any = [];
  const item: any = {};
  for (const grade of iterator) {
    if (!item[grade]) {
      item[grade] = 1;
    } else {
      item[grade]++;
    }
  }
  items.push(item);

  return (
    <>
      <S.AntdList
        header={<div>좌석 유형을 선택해주세요</div>}
        bordered
        dataSource={items}
        className="scroll"
        renderItem={(item: any) =>
          Object.keys(item).map(
            (key) =>
              visible && (
                <S.AntdListItem>
                  <Typography.Text mark>{`[${key}좌석]`}</Typography.Text>
                  &nbsp;{`${item[key]}석`}
                </S.AntdListItem>
              ),
          )
        }
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
