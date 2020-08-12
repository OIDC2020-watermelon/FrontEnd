import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../common/input/CustomInput';
import { Button, message, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { Bar } from 'react-chartjs-2';

export default function GraphLayout({
  labels,
  data,
  type,
}: {
  labels: Array<string>;
  data: Array<number>;
  type: string;
}) {
  let key;
  if (type === 'left') {
    key = {
      legend: {
        display: false,
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
      scales: {
        xAxes: [
          {
            ticks: {
              minRotation: 50, // angle in degrees
            },
          },
        ],
      },
      maintainAspectRatio: true,
    };
  } else {
    key = {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '공연예매 트래픽',
        color: 'black',
        fontSize: 18,
        fonrWeight: 800,
        position: 'top',
        padding: 10,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              minRotation: 50, // angle in degrees
            },
          },
        ],
      },
      maintainAspectRatio: true,
    };
  }

  return (
    <>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFE4C4',
                '#00FFFF',
                '#BDB76B',
                '#86A2EB',
                '#FFFF00',
                '#00FF00',
                '#663399',
                '#FF6347',
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFE4C4',
                '#00FFFF',
                '#BDB76B',
                '#86A2EB',
                '#FFFF00',
                '#00FF00',
                '#663399',
                '#FF6347',
              ],
            },
          ],
        }}
        width={100}
        height={75}
        options={key}
      />
    </>
  );
}

const S: any = {};
