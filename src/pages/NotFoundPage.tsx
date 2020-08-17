import React from 'react';
import styled from 'styled-components';
import AppLayout from '../containers/common/AppLayout';

export default function NotFoundPage() {
  return (
    <>
      <AppLayout>
        <S.PageContainer>
          <div>404 에러 페이지 입니다.</div>
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
