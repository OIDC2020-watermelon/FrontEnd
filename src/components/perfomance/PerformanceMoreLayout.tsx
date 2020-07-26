import React, { useCallback } from 'react';
import { Divider, Row } from 'antd';
import styled from 'styled-components';
import useInput from '../../lib/utils/hooks';
import { TMorePerformanceFilter } from '../../types/common/commonType';
import PerformanceReview from './more/PerformanceReview';
import PerformanceQna from './more/PerformanceQna';
import PerformanceMoreInfo from './more/PerformanceMoreInfo';
import PerformanceExpectation from './more/PerformanceExpectation';
import BookNotice from './more/BookNotice';
import MoreInfoNav from './more/MoreInfoNav';
import PerformancePlace from './more/PerformancePlace';

export default function PerformanceMoreLayout() {
  const [filter, changeFilter] = useInput<TMorePerformanceFilter>('more');

  const ShowSelectedPreview = useCallback((filter: TMorePerformanceFilter) => {
    switch (filter) {
      // 상세정보
      case 'more':
        return <PerformanceMoreInfo />;
      // 직픔후기
      case 'review':
        return <PerformanceReview />;
      //기대평
      case 'expect':
        return <PerformanceExpectation />;
      //qna
      case 'qna':
        return <PerformanceQna />;
      //유의사항
      case 'notice':
        return <BookNotice />;
      //공연장정보
      case 'place':
        return <PerformancePlace />;
      default:
        return;
    }
  }, []);
  return (
    <>
      <Divider></Divider>
      <MoreInfoNav filter={filter} changeFilter={changeFilter} />
      <Divider></Divider>
      <S.PreviewContainer>{ShowSelectedPreview(filter)}</S.PreviewContainer>
    </>
  );
}
const S: any = {};

S.PreviewContainer = styled(Row)`
  width: 100%;
  height: 30rem;
  margin: auto 0;
`;
