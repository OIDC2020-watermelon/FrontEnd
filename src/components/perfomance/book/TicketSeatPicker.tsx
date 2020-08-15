import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import SeatPicker from 'react-seat-picker';
import styled from 'styled-components';
import message from '../../../lib/utils/message';
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

      setSelectedSeat([
        ...selectedSeat,
        {
          row,
          number,
          id,
          // cost: selected[0].price,
          // grade: selected[0].grade,
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
