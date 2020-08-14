import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';
import PlaceLayout from '../../place/PlaceLayout';
import { RootState } from '../../../models';
import { useSelector } from 'react-redux';

export default function PerformancePlace() {
  const product = useSelector(
    (state: RootState) => state.performance.product.data,
  );
  return (
    <>
      <S.InfoContainer className="scroll">
        <PlaceLayout placeId={product?.place.id} />
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
