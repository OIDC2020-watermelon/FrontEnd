import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import palette from '../../../../lib/style/palette';
import { Link } from 'react-router-dom';
import PerformArtistCard from './PerformArtistCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../models';

export default function ArtistInfo() {
  const { data } = useSelector(
    (state: RootState) => state.performance.performance,
  );
  return (
    <>
      <S.ArtistInfoContainer className="scroll">
        {data &&
          data.artists.map((artist: any) => (
            <S.PerformArtistCardWrap
              key={artist.id}
              xs={12}
              sm={12}
              md={12}
              xl={8}
              xxl={6}
            >
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
  border-radius: 5px;
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
