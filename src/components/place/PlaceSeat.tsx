import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import SeatPicker from 'react-seat-picker';
import { dummySeat } from '../../assets/dummy/dummyData';

export default function PlaceSeat() {
  return (
    <>
      <SeatPicker
        rows={dummySeat}
        alpha
        visible
        selectedByDefault
        tooltipProps={{ multiline: true }}
      />
    </>
  );
}

const S: any = {};

S.InfoItemWrap = styled.div`
  width: 100%;
  font-weight: bold;
  border-top: 2px solid ${palette.gray8};
`;
S.InfoTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray4};
  font-weight: bold;
  padding: 1rem 0;
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 1rem 0;
`;
