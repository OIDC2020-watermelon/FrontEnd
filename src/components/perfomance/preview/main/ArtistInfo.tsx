import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import palette from '../../../../lib/style/palette';
import { Link } from 'react-router-dom';
import { perFormArtistInfo } from '../../../../assets/dummy/dummyData';
import PerformArtistCard from './PerformArtistCard';

export default function ArtistInfo() {
  const date = Date.now();
  return (
    <>
      <S.ArtistInfoContainer className="scroll">
        {perFormArtistInfo.map((artist) => (
          <S.PerformArtistCardWrap xs={12} sm={12} md={12} xl={8} xxl={6}>
            <PerformArtistCard artist={artist}></PerformArtistCard>
          </S.PerformArtistCardWrap>
        ))}
      </S.ArtistInfoContainer>
    </>
  );
}

const S: any = {};

S.ArtistInfoContainer = styled(Row)`
  border: 1px solid ${palette.gray5};
  height: 100%;
  width: 100%;
  padding: 2rem 2rem 2rem 3rem;
  overflow: auto;
`;

S.PerformArtistCardWrap = styled(Col)``;

S.StyledLink = styled(Link)`
  color: blue;
  text-decoration: underline;
`;

S.CostInfoHeadWrap = styled(Row)`
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid ${palette.gray6};
`;

S.CostInfoBodyWrap = styled(Row)`
  padding-top: 0.5rem;
`;