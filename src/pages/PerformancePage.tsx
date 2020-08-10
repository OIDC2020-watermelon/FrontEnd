import React, { useEffect } from 'react';
import styled from 'styled-components';
import TicketingLayout from '../components/perfomance/TicketingLayout';
import PreviewLayout from '../components/perfomance/PreviewLayout';
import PerformanceMoreLayout from '../components/perfomance/PerformanceMoreLayout';
import { useDispatch } from 'react-redux';
import { getPerformance } from '../models/saga/reducers/performance';

export default function PerformancePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPerformance.request({}));
  }, [dispatch]);

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
