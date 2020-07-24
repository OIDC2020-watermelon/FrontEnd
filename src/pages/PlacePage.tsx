import React from 'react';
import styled from 'styled-components';
import PlaceCard from '../components/place/PlaceCard';
import PlaceSeat from '../components/place/PlaceSeat';
import palette from '../lib/style/palette';

export default function PlacePage() {
  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>공연장 정보</S.InfoTitle>
          <S.InfoContents>
            <PlaceCard />
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>환불안내</S.InfoTitle>
          <S.InfoContents>
            <PlaceSeat />
          </S.InfoContents>
        </S.InfoItemWrap>
      </S.Container>
    </>
  );
}

const S: any = {};
S.Container = styled.div`
  padding: 0 5rem;
`;
S.InfoItemWrap = styled.div`
  width: 100%;
  font-weight: bold;
  border-top: 2px solid ${palette.gray8};
`;
S.InfoTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray4};
  font-weight: bold;
  padding: 0.5rem 0;
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 1rem 0;
`;
