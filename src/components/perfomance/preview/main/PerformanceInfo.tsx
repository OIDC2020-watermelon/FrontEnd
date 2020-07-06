import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import palette from '../../../../lib/style/palette';
import { Link } from 'react-router-dom';
import { performanceStory } from '../../../../assets/dummy/dummyData';

export default function PerformanceInfo() {
  return (
    <>
      <S.PerformanceInfoContainer>
        <S.CostInfoHeadWrap justify="space-between">
          <Col span={5} className="main_info_title">
            줄거리
          </Col>
          <Col span={2}>
            <S.StyledLink to="/">더보기</S.StyledLink>
          </Col>
        </S.CostInfoHeadWrap>
        <S.CostInfoBodyWrap>{performanceStory}</S.CostInfoBodyWrap>
      </S.PerformanceInfoContainer>
    </>
  );
}

const S: any = {};

S.PerformanceInfoContainer = styled.div`
  border: 1px solid ${palette.gray5};
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding: 2rem 2rem 2rem 3rem;
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
