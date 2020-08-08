import React from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';
import { RootState } from '../../../models';
import { useSelector } from 'react-redux';

const data = [
  '13시 00분',
  '13시 00분',
  '14시 00분',
  '15시 00분',
  '16시 00분',
  '17시 00분',
];

export default function SelectAbleTime() {
  const tickets = useSelector((state: RootState) => state.performance.ticket);
  console.log('tickets', tickets);
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
