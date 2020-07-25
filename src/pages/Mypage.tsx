import React from 'react';
import styled from 'styled-components';
import Mypage from '../components/NavBar/mypage/Mypage';

export default function MyPages() {
  return (
    <>
      <S.PageContainer>
        <Mypage />
      </S.PageContainer>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 1130px;
  margin: 0 auto;
`;
