import React from 'react';
import Booking from '../components/NavBar/booking';
import styled from 'styled-components';
import AppLayout from '../containers/common/AppLayout';

export default function BookingPages() {
  return (
    <>
      <AppLayout>
        <S.PageContainer>
          <Booking />
        </S.PageContainer>
      </AppLayout>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 1130px;
  margin: 0 auto;
`;
