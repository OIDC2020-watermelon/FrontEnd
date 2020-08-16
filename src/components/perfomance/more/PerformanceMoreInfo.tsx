import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';
import { ArtistInfo, MainInfo, PerformanceInfo } from '../preview/main';

export default function PerformanceMoreInfo() {
  return (
    <>
      <S.InfoContainer className="scroll">
        <S.InfoItemWrap>
          <S.InfoTitle>기본정보</S.InfoTitle>
          <S.InfoContents>
            <MainInfo more />
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>출연정보</S.InfoTitle>
          <S.InfoContents>
            <ArtistInfo />
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>공연정보</S.InfoTitle>
          <S.InfoContents>
            <PerformanceInfo />
          </S.InfoContents>
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
  padding: 4rem 3rem;
  border-radius: 5px;
  overflow: auto;
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
  padding: 0.5rem;
  font-weight: bold;
`;

S.InfoContents = styled.div`
  padding: 0.5rem 0rem;
  width: 100%;
  font-weight: bold;
`;
