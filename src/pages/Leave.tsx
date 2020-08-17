import React from 'react';
import styled from 'styled-components';
import Leave from '../components/NavBar/mypage/Leave';
import AppLayout from '../containers/common/AppLayout';

export default function LeavePages() {
  return (
    <>
      <AppLayout>
        <S.PageContainer>
          <Leave />
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
