import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import palette from '../../lib/style/palette';
import { RootState } from '../../models';
import { getArtist } from '../../models/saga/reducers/artist';
import ArtistCard from './ArtistCard';
import ArtistJobCard from './ArtistJobCard';
export default function PlaceLayout() {
  const [addFlag, setAddFlag] = useState<boolean>(false);
  const { id: artistId } = useRouteMatch().params as any;
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.artist.artist.data);
  console.log(data, '---------------');
  useEffect(() => {
    dispatch(getArtist.request({ artistId }));
  }, [dispatch, artistId]);
  const addFlagClick = () => {
    setAddFlag(true);
  };

  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>소개</S.InfoTitle>
          <S.InfoContents>
            <ArtistCard data={data} />
          </S.InfoContents>
        </S.InfoItemWrap>

        <S.InfoItemWrap>
          <S.InfoTitle>
            출연작품
            <S.addInfo onClick={addFlagClick}>더보기</S.addInfo>
          </S.InfoTitle>
          {addFlag ? (
            <>
              {data?.products.map((list: any) => {
                console.log('list', list);
                return (
                  <S.InfoContentsJob key={list?.id}>
                    <ArtistJobCard data={list} />
                  </S.InfoContentsJob>
                );
              })}
            </>
          ) : (
            <>
              {data?.products.map((list: any, index: number) => {
                if (index >= 10) {
                  return '';
                } else {
                  return (
                    <S.InfoContentsJob key={list?.id}>
                      <ArtistJobCard data={list} />
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
            {data?.careers.map((career: any) => (
              <>
                <S.InfoContentsDetail key={career.id}>
                  경력일자 : {moment(career.data).format('YYYY-MM-DD')}
                </S.InfoContentsDetail>
                <S.InfoContentsDetail
                  style={{ marginBottom: '1rem' }}
                  key={career.id}
                >
                  경력설명 : {career.description}
                </S.InfoContentsDetail>
              </>
            ))}
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
