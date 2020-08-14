import React, { FC } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import font from '../../../../lib/style/font';
import palette from '../../../../lib/style/palette';

interface PerformArtistCardProps {
  artist: any;
}

export default function PerformArtistCard({ artist }: PerformArtistCardProps) {
  return (
    <>
      <S.ArtistCardContainer>
        <S.ArtistImage
          artistImage={
            artist?.thumbnailImgUrl || 'https://source.unsplash.com/random'
          }
          span={11}
        ></S.ArtistImage>
        <S.ArtistTextContainer span={13}>
          <Row justify="space-between">
            <Col className="artist_name" span={14}>
              {artist?.name}
            </Col>
            <Col span={10}>
              <S.StyledLink to={`/artist/${artist?.id}`}>자세히</S.StyledLink>
            </Col>
          </Row>
          <Row className="artist_role">{artist?.occupation}</Row>
        </S.ArtistTextContainer>
      </S.ArtistCardContainer>
    </>
  );
}

const S: any = {};
S.ArtistCardContainer = styled(Row)`
  height: 8rem;
  border-radius: 5px;
  border: 1px solid ${palette.gray4};
  border-radius: 5px;
  margin: 0 1rem 1rem 0;
`;

interface ArtistImageProps {
  artistImage: string;
}
S.ArtistImage = styled(Col)<ArtistImageProps>`
  height: 100%;
  background: url(${(props) => props.artistImage});
  background-position: 50% 50%;
  background-size: cover;
` as FC<ArtistImageProps>;

S.ArtistTextContainer = styled(Col)`
  padding: 0.5rem 1rem;
  & .artist_name {
    ${font.boldFont}
    font-weight : bold;
    margin-bottom: 0.5rem;
  }
  & .artist_role {
    ${font.italicFont}
  }
`;

S.StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: blue;
  text-decoration: underline;
`;
