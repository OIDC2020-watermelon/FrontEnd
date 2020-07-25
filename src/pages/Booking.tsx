import React from 'react';
import Booking from '../components/NavBar/booking';
import styled from 'styled-components';

export default function BookingPages() {
  return (
    <>
      <S.PageContainer>
        <Booking />
      </S.PageContainer>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 1130px;
  margin: 0 auto;
`;
