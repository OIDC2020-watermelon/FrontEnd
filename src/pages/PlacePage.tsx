import React from 'react';
import styled from 'styled-components';
import PlaceCard from '../components/place/PlaceCard';
import PlaceLayout from '../components/place/PlaceLayout';
import PlaceSeat from '../components/place/PlaceSeat';
import palette from '../lib/style/palette';

export default function PlacePage() {
  return (
    <>
      <PlaceLayout />
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
