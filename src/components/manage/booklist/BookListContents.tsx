import React from 'react';
import { Divider } from 'antd';
import { Table, Tag, Space } from 'antd';

export default function BookListContents() {
  const columns = [
    {
      title: '예메일',
      dataIndex: 'bookDate',
      key: 'bookDate',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: '예약번호',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '상품명',
      dataIndex: 'production',
      key: 'production',
    },
    {
      title: '이용일/매수',
      key: 'useDate',
      dataIndex: 'useDate',
      render: (useDate: any) => (
        <>
          {useDate.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '취소가능일',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>{record.bookDate}</a>
          <a>취소</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      bookDate: '2020-01-01',
      id: 'AEECCFWERQWEFD',
      production: 'New York No. 1 Lake Park',
      useDate: ['2020-02-01', '2매'],
    },
    {
      key: '2',
      bookDate: '2020-02-01',
      id: 'AEdfgCFdsRQWEFD',
      production: 'London No. 1 Lake Park',
      useDate: ['2020-03-01', '1매'],
    },
    {
      key: '3',
      bookDate: '2020-03-01',
      id: 'EGECCFWERERQED',
      production: 'Sidney No. 1 Lake Park',
      useDate: ['2020-04-01', '3매'],
    },
  ];
  return (
    <>
      <Divider></Divider>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
