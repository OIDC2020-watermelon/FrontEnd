import React from 'react';
import styled from 'styled-components';
import Mypage from '../components/NavBar/mypage/Mypage';
import AppLayout from '../containers/common/AppLayout';

export default function MyPages() {
  return (
    <>
      <AppLayout>
        <S.PageContainer>
          <Mypage />
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
