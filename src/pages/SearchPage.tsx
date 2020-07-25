import React from 'react';
import styled from 'styled-components';
import Index from '../components/search';

export default function searchPage() {
  return (
    <>
      <S.PageContainer>
        <Index />
      </S.PageContainer>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 1130px;
  margin: 0 auto;
`;
