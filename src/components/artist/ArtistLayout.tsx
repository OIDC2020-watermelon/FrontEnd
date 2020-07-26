import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import ArtistCard from './ArtistCard';
import ArtistJobCard from './ArtistJobCard';
export default function PlaceLayout() {
  const [addFlag, setAddFlag] = useState<boolean>(false);

  const addFlagClick = () => {
    setAddFlag(true);
  };

  const jobLength = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 11개 Length

  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>소개</S.InfoTitle>
          <S.InfoContents>
            <ArtistCard />
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>인물 소개</S.InfoTitle>
          <S.InfoContents style={{ display: 'block' }}>
            <S.InfoContentsDetail>
              소속사 : {'SM Entertainment'}
            </S.InfoContentsDetail>

            <S.InfoContentsDetail>데뷔곡 : {'깡(2019)'}</S.InfoContentsDetail>
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>
            출연작품
            <S.addInfo onClick={addFlagClick}>더보기</S.addInfo>
          </S.InfoTitle>
          {addFlag ? (
            <>
              {jobLength.map((list, key) => {
                return (
                  <S.InfoContentsJob>
                    <ArtistJobCard />
                  </S.InfoContentsJob>
                );
              })}
            </>
          ) : (
            <>
              {jobLength.map((list, key) => {
                if (key >= 10) {
                  return '';
                } else {
                  return (
                    <S.InfoContentsJob>
                      <ArtistJobCard />
                    </S.InfoContentsJob>
                  );
                }
              })}
            </>
          )}
        </S.InfoItemWrap>

        <S.InfoItemWrap>
          <S.InfoTitle>수상 / 경력</S.InfoTitle>
          <S.InfoContents style={{ display: 'block' }}>
            <S.InfoContentsDetail>
              수상 : 2012 제9회 한국대중음악상 올해의 노래상 2012 제24회
              한국PD대상 가수부문 출연자상
            </S.InfoContentsDetail>

            <S.InfoContentsDetail>
              경력 : 2012.02 경찰청 학교폭력 예방 홍보대사 2011.05 2012
              여수세계박람회 홍보대사
            </S.InfoContentsDetail>
          </S.InfoContents>
        </S.InfoItemWrap>
      </S.Container>
    </>
  );
}

const S: any = {};
S.Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
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
  clear: both;
  margin-bottom: 1rem;
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 1rem 0;
  display: flex;
`;

S.InfoContentsDetail = styled.div``;

S.InfoContentsJob = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 1rem;
`;

S.addInfo = styled.a`
  float: right;
`;
