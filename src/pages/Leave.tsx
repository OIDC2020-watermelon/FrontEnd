import React from 'react';
import styled from 'styled-components';
import Leave from '../components/NavBar/mypage/Leave';

export default function LeavePages() {
  return (
    <>
      <S.PageContainer>
        <Leave />
      </S.PageContainer>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 1130px;
  margin: 0 auto;
`;
