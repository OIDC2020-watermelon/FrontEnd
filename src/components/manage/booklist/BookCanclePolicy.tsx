import React from 'react';
import { Table, Divider, Typography } from 'antd';
import styled from 'styled-components';

export default function BookCanclePolicy() {
  const columns = [
    {
      title: '구분',
      dataIndex: 'type',
    },
    {
      title: '취소수수료',
      dataIndex: 'fees',
    },
    {
      title: '비고',
      dataIndex: 'remark',
      className: 'remark_column',
      render: (text: string, row: any, index: number) => {
        const obj = {
          children: text,
          props: { rowSpan: 0 },
        };
        if (index === 0) {
          obj.props.rowSpan = 4;
        }
        return obj;
      },
    },
  ];
  const data = [
    {
      key: '1',
      type: '예매 후 7일 이내',
      fees: '없음',
      remark: `예매당일에 취소하는 경우
      이외에는 예매수수료가 환불되지 않음,
      예매 후 7일 이내라도 취소시점이
      공연일로부터 10일 이내라면 그에
      해당하는 취소수수료 부과`,
    },
    {
      key: '2',
      type: '관람일 9일전 ~ 7일 전',
      fees: '티켓금액의 10%',
    },
    {
      key: '3',
      type: '관람일 6일전 ~ 3일 전',
      fees: '티켓금액의 30%',
    },
    {
      key: '4',
      type: '관람일 2일전 ~ 1일 전',
      fees: '티켓금액의 50%',
    },
  ];
  return (
    <>
      <Divider />
      <Typography.Title level={4}>취소 수수료 정책</Typography.Title>
      <div>
        <S.AntdTable
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
        />
      </div>
    </>
  );
}

const S: any = {};

S.AntdTable = styled(Table)`
  & .remark_column {
    width: 20rem;
  }
`;
