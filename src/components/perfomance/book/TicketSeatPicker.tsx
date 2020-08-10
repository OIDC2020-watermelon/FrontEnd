import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import SeatPicker from 'react-seat-picker';
import styled from 'styled-components';
import { RootState } from '../../../models';

interface TicketSeatPickerProps {
  selectedSeat: any;
  setSelectedSeat: any;
}
export default function TicketSeatPicker({
  selectedSeat,
  setSelectedSeat,
}: TicketSeatPickerProps) {
  const [loading, setLoading] = useState(false);
  const data = useSelector((state: RootState) => state.performance.ticket);
  console.log('data', data);

  const seatData: any = [[], [], [], [], [], [], [], [], [], []];
  const row: any = [];

  data?.forEach((seat: any, index: number) => {
    const format: any = {};
    format['id'] = seat.id;
    format['number'] = (index % 10) + 1;
    // format['tooltip'] = `${seat.grade}/${seat.price}`;
    if (seat.sold) {
      format['isReserved'] = seat.sold;
    }
    console.log('format', format);
    row[index] = format;
  });
  console.log('row, seatData', row, seatData);

  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i: number) => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((j: number) => {
      console.log(row[i * 10 + j]);
      seatData[i][j] = row[i * 10 + j];
    });
  });

  console.log(seatData);
  const addSeat = useCallback(
    async ({ row, number, id }: any, addCb: any) => {
      setLoading(true);
      const newTooltip = `tooltip for id-${id} added by callback`;
      const selected = data?.filter((seat: any) => seat.id === id);
      console.log(selected, '=============', selected[0].price);

      setSelectedSeat([
        ...selectedSeat,
        {
          row,
          number,
          id,
          cost: selected[0].price,
          grade: selected[0].grade,
        },
      ]);
      addCb(row, number, id, newTooltip);
      setLoading(false);
    },
    [selectedSeat, setSelectedSeat],
  );

  const removeSeat = useCallback(
    ({ row, number, id }: any, removeCb: any) => {
      setLoading(true);
      console.log(`Removed seat ${number}, row ${row}, id ${id}`);
      const newTooltip = ['A', 'B', 'C'].includes(row) ? null : '';
      setSelectedSeat(selectedSeat.filter((seat: any) => seat.id !== id));
      removeCb(row, number, newTooltip);
      setLoading(false);
    },
    [selectedSeat, setSelectedSeat],
  );

  const rows = [
    [
      { id: 1, number: 1, tooltip: 'Reserved by you' },
      { id: 2, number: 2, tooltip: 'Cost: 15$' },
      null,
      {
        id: 3,
        number: '3',
        isReserved: true,
        orientation: 'east',
        tooltip: 'Reserved by Rogger',
      },
      { id: 4, number: '4', orientation: 'west' },
      null,
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    [
      {
        id: 7,
        number: 1,
        isReserved: true,
        tooltip: 'Reserved by Matthias Nadler',
      },
      { id: 8, number: 2, isReserved: true },
      null,
      { id: 9, number: '3', isReserved: true, orientation: 'east' },
      { id: 10, number: '4', orientation: 'west' },
      null,
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      null,
      { id: 15, number: 3, isReserved: true, orientation: 'east' },
      { id: 16, number: '4', orientation: 'west' },
      null,
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1, tooltip: 'Cost: 25$' },
      { id: 20, number: 2 },
      null,
      { id: 21, number: 3, orientation: 'east' },
      { id: 22, number: '4', orientation: 'west' },
      null,
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2, orientation: 'east' },
      null,
      { id: 27, number: '3', isReserved: true },
      { id: 28, number: '4', orientation: 'west' },
      null,
      { id: 29, number: 5, tooltip: 'Cost: 11$' },
      { id: 30, number: 6, isReserved: true },
    ],
  ];
  return (
    <S.ContainerWrap>
      <S.SeatPickerWrap>
        <h1>공연명</h1>
        <SeatPicker
          addSeatCallback={addSeat}
          removeSeatCallback={removeSeat}
          rows={seatData}
          maxReservableSeats={3}
          alpha
          visible
          selectedByDefault
          loading={loading}
          tooltipProps={{ multiline: true }}
        />
      </S.SeatPickerWrap>
      <S.SeatInfoContainer>
        <S.SeatInfoWrap style={{ height: '7.6rem' }}>
          <S.SeatInfoTitle>
            <h4>좌석구역</h4>
            <h4>가격</h4>
          </S.SeatInfoTitle>
          {['A', 'B', 'C', 'D', 'E'].map((seat: any, i: number) => (
            <S.SeatInfoContents>
              <span style={{ fontSize: '0.7rem' }}>{`${seat}`}</span>
              <span style={{ fontSize: '0.7rem' }}>{`${
                (i + 1) * 10000
              }원`}</span>
            </S.SeatInfoContents>
          ))}
          <S.SeatInfoContents></S.SeatInfoContents>
        </S.SeatInfoWrap>

        <S.SeatInfoWrap style={{ height: '7.5rem' }}>
          <S.SeatInfoTitle>
            <h4>선택좌석</h4>
            <h4>좌석번호</h4>
          </S.SeatInfoTitle>
          {selectedSeat.map((seat: any) => (
            <S.SeatInfoContents>
              <span>{`${seat.row}-${seat.number}`}</span>
              <span>{`${seat.id}`}</span>
            </S.SeatInfoContents>
          ))}
        </S.SeatInfoWrap>
      </S.SeatInfoContainer>
    </S.ContainerWrap>
  );
}

const S: any = {};

S.ContainerWrap = styled.div`
  display: flex;
`;

S.SeatPickerWrap = styled.div`
  margin-right: 2rem;
`;

S.SeatInfoContainer = styled.div`
  width: 100%;
`;

S.SeatInfoWrap = styled.div``;

S.SeatInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.SeatInfoContents = styled.div`
  display: flex;
  justify-content: space-between;
`;
