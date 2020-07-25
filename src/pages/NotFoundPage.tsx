import React from 'react';
import styled from 'styled-components';

export default function NotFoundPage() {
  return (
    <>
      <S.PageContainer>
        <div>404 에러 페이지 입니다.</div>
      </S.PageContainer>
    </>
  );
}

const S: any = {};

S.PageContainer = styled.article`
  max-width: 1130px;
  margin: 0 auto;
`;
