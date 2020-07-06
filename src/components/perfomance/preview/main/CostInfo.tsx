import React, { FC } from 'react';
import styled from 'styled-components';
import { Row, Col, Divider } from 'antd';
import palette from '../../../../lib/style/palette';
import { Link } from 'react-router-dom';
import { performanceCost } from '../../../../assets/dummy/dummyData';

export default function CostInfo() {
  const date = Date.now();
  return (
    <>
      <S.CostInfoContainer>
        <S.CostInfoHeadWrap justify="space-between">
          <Col span={5} className="main_info_title">
            가격정보
          </Col>
          <Col span={3}>
            <S.StyledLink to="/">더보기</S.StyledLink>
          </Col>
        </S.CostInfoHeadWrap>
        <S.CostInfoBodyWrap>
          {performanceCost.map((cost) => (
            <>
              <Col span={5}>{cost.type}석</Col>
              <Col span={19}>{cost.cost}원</Col>
            </>
          ))}
        </S.CostInfoBodyWrap>
      </S.CostInfoContainer>
    </>
  );
}

const S: any = {};

S.CostInfoContainer = styled.div`
  border: 1px solid ${palette.gray5};
  height: 100%;
  width: 100%;
  padding: 4rem 5rem;
  border-radius: 5px;
`;

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
