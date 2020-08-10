import React from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../models';

function* seatArray(data: any) {
  let index = 0;
  if (data instanceof Array)
    while (data[index]) {
      if (!data[index].sold) yield data[index].grade;
      index++;
    }
}

export default function SelectAbleSeat() {
  const data = useSelector((state: RootState) => state.performance.ticket);

  const iterator = seatArray(data) as any;
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
          Object.keys(item).map((key) => (
            <S.AntdListItem>
              <Typography.Text mark>{`[${key}좌석]`}</Typography.Text>
              &nbsp;{`${item[key]}석`}
            </S.AntdListItem>
          ))
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
