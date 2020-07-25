import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import SeatPicker from 'react-seat-picker';
import { dummySeat } from '../../assets/dummy/dummyData';
import CustomInput from '../common/input/CustomInput';

const grade = [
  {
    type: 'A',
    cost: 10000,
  },
  {
    type: 'B',
    cost: 20000,
  },
  {
    type: 'C',
    cost: 30000,
  },
  {
    type: 'D',
    cost: 40000,
  },
  {
    type: 'E',
    cost: 50000,
  },
];
export default function PlaceSeat() {
  return (
    <>
      <S.PlaceSeatContainer>
        <div>
          <SeatPicker
            rows={dummySeat}
            alpha
            visible
            selectedByDefault
            left
            tooltipProps={{ multiline: true }}
          />
        </div>
        <div>
          <S.ContentTitleWrap>
            <h5>좌석 등급</h5>
            <h5>좌석 가격</h5>
          </S.ContentTitleWrap>
          {grade.map((item) => (
            <S.ContentWrap>
              <div>{item.type}</div>
              <div>{item.cost}</div>
            </S.ContentWrap>
          ))}
        </div>
      </S.PlaceSeatContainer>
      <br />
      <CustomInput />
    </>
  );
}

const S: any = {};

S.PlaceSeatContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

S.ContentTitleWrap = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  border-top: 2px solid ${palette.gray5};
  border-bottom: 1px solid ${palette.gray3};
  & > h5 {
    font-weight: bold;
  }
`;
S.ContentWrap = styled.div`
  width: 25rem;
  display: flex;
  justify-content: space-between;
`;
