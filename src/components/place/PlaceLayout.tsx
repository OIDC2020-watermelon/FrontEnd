import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import { RootState } from '../../models';
import { getPlace } from '../../models/saga/reducers/place';
import PlaceCard from './PlaceCard';
//import PlaceSeat from './PlaceSeat';

interface PlaceLayoutProps {
  placeId?: string;
}

export default function PlaceLayout({ placeId }: PlaceLayoutProps) {
  const dispatch = useDispatch();
  const { id } = useRouteMatch().params as any;
  const data = useSelector((state: RootState) => state.place.place.data);

  console.log(data);
  useEffect(() => {
    dispatch(getPlace.request({ placeId: placeId || id }));
  }, [dispatch]);
  return (
    <>
      <S.Container>
        <S.InfoItemWrap>
          <S.InfoTitle>공연장 정보</S.InfoTitle>
          <S.InfoContents>
            <PlaceCard data={data} />
          </S.InfoContents>
        </S.InfoItemWrap>
        <S.InfoItemWrap>
          <S.InfoTitle>공연장 설명</S.InfoTitle>
          <S.InfoContents
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></S.InfoContents>
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
`;

S.InfoContents = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 1rem 0;
`;
