import React from 'react';
import styled from 'styled-components';
import Index from '../components/search';
import AppLayout from '../containers/common/AppLayout';

export default function searchPage() {
  return (
    <>
      <AppLayout>
        <S.PageContainer>
          <Index />
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
