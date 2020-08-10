import React, { useEffect, useState } from 'react';
import { Divider, message, Popconfirm } from 'antd';
import { Table, Space, Button } from 'antd';

export default function BookListContents({
  manages,
  cancelButton,
}: {
  manages: any;
  cancelButton: any;
}) {
  // console.log('manages : ', manages);
  /*
  availableDate: "2020-08-01" O
  cancelableDate: "2020-07-29" O
  canceled: true O
  createdAt: null
  id: 4
  name: "watermelon 10주년 공연" O
  pay: 20000
  serialNumber: "e2dfa549997c47d2b0a389508a0f236b" O
  startAt: "04:00:00"
*/

  const columns = [
    {
      title: '공연일',
      dataIndex: 'availableDate',
      key: 'availableDate',
      render: (text: any) => <a href="/">{text}</a>,
    },
    {
      title: '예약번호',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
    },
    {
      title: '상품명',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '이용일',
      key: 'availableDate',
      dataIndex: 'availableDate',
    },
    {
      title: '가격',
      dataIndex: 'pay',
      key: 'pay',
    },
    {
      title: '취소가능일',
      key: 'cancelableDate',
      dataIndex: 'cancelableDate',
    },
    {
      title: '취소',
      key: 'canceled',
      dataIndex: 'canceled',
      render: (text: any, record: any) => (
        <Space size="middle">
          {record.canceled ? (
            <Popconfirm
              title="정말 삭제하시겠습니까?"
              onConfirm={() => {
                cancelButton(record.id);
              }}
              okText="예"
              cancelText="아니요"
            >
              <Button>취소가능</Button>
            </Popconfirm>
          ) : (
            <Button
              onClick={() => {
                message.warning('취소가 불가능합니다.');
              }}
            >
              취소불가
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <>
      <Divider></Divider>
      <Table columns={columns} dataSource={manages.data} />
    </>
  );
}
