import React, { useCallback } from 'react';
import { Divider, Button, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import SelectFilter from './preview/SelectFilter';
import useInput from '../../lib/utils/hooks';
import { TFilter } from '../../types/common/commonType';
import {
  MainInfo,
  CostInfo,
  ArtistInfo,
  PerformanceInfo,
} from './preview/main';

const { Title } = Typography;

export default function PreviewLayout() {
  const [filter, changeFilter] = useInput<TFilter>('main');

  const ShowSelectedPreview = useCallback((filter: TFilter) => {
    switch (filter) {
      case 'main':
        return <MainInfo />;
      case 'cost':
        return <CostInfo />;
      case 'artist':
        return <ArtistInfo />;
      case 'performance':
        return <PerformanceInfo />;
      default:
        return;
    }
  }, []);
  return (
    <>
      <Divider></Divider>

      <S.HeadInfoContainer>
        <S.HeadMainInfoWrap>
          <S.AntdTitle level={3}>메인 카테고리 &lt;공연명&gt;</S.AntdTitle>
          <S.AntdDisalbeButton disabled={true} type="ghost">
            예매중
          </S.AntdDisalbeButton>
        </S.HeadMainInfoWrap>

        <S.HeadSubInfoWrap>
          <span>서브카테고리 | 상영시간 | 관람제한</span>
          <SelectFilter filter={filter} changeFilter={changeFilter} />
        </S.HeadSubInfoWrap>
      </S.HeadInfoContainer>

      <S.PreviewContainer>{ShowSelectedPreview(filter)}</S.PreviewContainer>
    </>
  );
}
const S: any = {};
S.HeadInfoContainer = styled.div`
  margin: 0 5rem;
`;
S.HeadMainInfoWrap = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
S.HeadSubInfoWrap = styled(Row)`
  display: flex;
  justify-content: space-between;
`;
S.PreviewContainer = styled(Row)`
  width: 100%;
  height: 30rem;
  padding: 1rem 5rem;
`;
S.DatePickerWrap = styled(Col)`
  padding-right: 4rem;
`;

S.DateOpsContainer = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

S.AntdTitle = styled(Title)`
  margin: 0 !important;
`;

S.AntdDisalbeButton = styled(Button)`
  align-self: center;
`;
