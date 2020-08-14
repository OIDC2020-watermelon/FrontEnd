import React, { useCallback } from 'react';
import { Divider, Button, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import SelectFilter from './preview/SelectFilter';
import useInput from '../../lib/utils/hooks';
import { TFilter } from '../../types/common/commonType';
import moment from 'moment';
import {
  MainInfo,
  CostInfo,
  ArtistInfo,
  PerformanceInfo,
} from './preview/main';
import { useSelector } from 'react-redux';
import { RootState } from '../../models';

const { Title } = Typography;

export default function PreviewLayout() {
  const [filter, changeFilter] = useInput<TFilter>('main');
  const now = Date.now();
  const { data } = useSelector((state: RootState) => state.performance.product);

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
          <S.AntdTitle level={3}>{data?.title || `공연명`}</S.AntdTitle>
          <S.AntdDisalbeButton disabled={true} type="ghost">
            {moment(now) < moment(data?.releaseEndTime) &&
            moment(now) > moment(data?.releaseStartTime)
              ? '예매중'
              : '판매중지'}
          </S.AntdDisalbeButton>
        </S.HeadMainInfoWrap>

        <S.HeadSubInfoWrap>
          <span>{`${data?.category} | ${data?.runningTime} | ${data?.rrated}세 미만 이용불가`}</span>
          <SelectFilter filter={filter} changeFilter={changeFilter} />
        </S.HeadSubInfoWrap>
      </S.HeadInfoContainer>

      <S.PreviewContainer>{ShowSelectedPreview(filter)}</S.PreviewContainer>
    </>
  );
}
const S: any = {};
S.HeadInfoContainer = styled.div``;
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
  padding: 1rem 0;
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
