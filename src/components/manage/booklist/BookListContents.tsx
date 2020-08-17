import React from 'react';
import { Divider, Popconfirm } from 'antd';
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
      dataIndex: 'createdAt',
      key: 'createdAt',
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
      title: '매수',
      key: 'pieces',
      dataIndex: 'pieces',
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
      title: '현재상태',
      key: 'canceled',
      dataIndex: 'canceled',
      render: (text: any, record: any) => (
        <Space size="middle">
          {record.canceled ? (
            <span>취소</span>
          ) : (
            <Popconfirm
              title="정말 취소하시겠습니까?"
              onConfirm={() => {
                cancelButton(record.id);
              }}
              okText="예"
              cancelText="아니요"
            >
              <Button>예매</Button>
            </Popconfirm>
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
