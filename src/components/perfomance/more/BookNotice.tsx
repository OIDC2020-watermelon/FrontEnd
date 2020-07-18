import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';

export default function BookNotice() {
  return (
    <>
      <S.InfoContainer>
        <S.InfoItemWrap>
          <S.InfoTitle>예매취소 시 유의사항</S.InfoTitle>
          <S.InfoContents>더미데이터</S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>환불안내</S.InfoTitle>
          <S.InfoContents>더미데이터</S.InfoContents>
        </S.InfoItemWrap>
      </S.InfoContainer>
    </>
  );
}

const S: any = {};

S.InfoContainer = styled.div`
  border: 1px solid ${palette.gray5};
  height: 100%;
  width: 100%;
  padding: 4rem 5rem;
  border-radius: 5px;
`;

S.InfoItemWrap = styled.div`
  width: 100%;
  font-weight: bold;
  border-bottom: 2px solid ${palette.gray8};
  &:first-child {
    border-top: 2px solid ${palette.gray8};
  }
`;
S.InfoTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray4};
  font-weight: bold;
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
`;
