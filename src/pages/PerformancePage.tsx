import React, { useEffect } from 'react';
import styled from 'styled-components';
import TicketingLayout from '../components/perfomance/TicketingLayout';
import PreviewLayout from '../components/perfomance/PreviewLayout';
import PerformanceMoreLayout from '../components/perfomance/PerformanceMoreLayout';
import { useDispatch } from 'react-redux';
import { getProduct } from '../models/saga/reducers/performance';
import { useRouteMatch } from 'react-router-dom';
import AppLayout from '../containers/common/AppLayout';

export default function PerformancePage() {
  const { id } = useRouteMatch().params as any;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct.request({ productId: id }));
  }, [dispatch, id]);

  return (
    <>
      <AppLayout>
        <S.PageContainer>
          <PreviewLayout />
          <TicketingLayout />
          <PerformanceMoreLayout />
        </S.PageContainer>
      </AppLayout>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 63rem;
  margin: 0 auto;
`;
