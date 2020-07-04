import React from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';

const data = [
  { type: 'S', number: 100 },
  { type: 'R', number: 100 },
  { type: 'A', number: 100 },
  { type: 'B', number: 100 },
  { type: 'C', number: 100 },
];
export default function SelectAbleSeat() {
  return (
    <>
      <S.AntdList
        header={<div>좌석 유형을 선택해주세요</div>}
        bordered
        dataSource={data}
        renderItem={(item: any) => (
          <S.AntdListItem>
            <Typography.Text mark>{`[${item.type}좌석]`}</Typography.Text>
            &nbsp;{`${item.number}석`}
          </S.AntdListItem>
        )}
      />
    </>
  );
}

const S: any = {};

S.AntdList = styled(List)`
  height: 18rem;
  overflow: scroll;
`;

S.AntdListItem = styled(List.Item)``;
