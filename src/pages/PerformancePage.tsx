import React from 'react';
import styled from 'styled-components';
import TicketingLayout from '../components/perfomance/TicketingLayout';
import PreviewLayout from '../components/perfomance/PreviewLayout';
import PerformanceMoreLayout from '../components/perfomance/PerformanceMoreLayout';

export default function PerformancePage() {
  return (
    <>
      <S.PageContainer>
        <PreviewLayout />
        <TicketingLayout />
        <PerformanceMoreLayout />
      </S.PageContainer>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 63rem;
  margin: 0 auto;
`;
