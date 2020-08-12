import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../common/input/CustomInput';
import { Button, message, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { Bar } from 'react-chartjs-2';

export default function GraphLayout({
  labels,
  data,
}: {
  labels: Array<string>;
  data: Array<number>;
}) {
  return (
    <>
      <Bar
        data={{
          labels: ['데이터 없음'],
          datasets: [
            {
              data: [1],
            },
          ],
        }}
        width={100}
        height={75}
        options={{
          legend: {
            display: false,
            position: 'right',
          },
          title: {
            display: true,
            text: '예매 페이지 트래픽',
            color: 'black',
            fontSize: 18,
            fonrWeight: 800,
            position: 'top',
            padding: 10,
          },

          maintainAspectRatio: true,
        }}
      />
    </>
  );
}

const S: any = {};
