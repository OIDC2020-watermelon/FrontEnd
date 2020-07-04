import React, { FC } from 'react';
import styled from 'styled-components';
import { Row, Col, Divider } from 'antd';
import palette from '../../../../lib/style/palette';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { performanceCost } from '../../../../assets/dummy/dummyData';

export default function CostInfo() {
  const date = Date.now();
  return (
    <>
      <S.MainInfoContainer>
        <Row>
          <Col span={12}>
            <S.CoverImage coverImg="https://source.unsplash.com/random" />
          </Col>
          <S.MainInfoTextWrap span={12}>
            <Row className="main_info">
              <Col span={5}>장소</Col>
              <Col span={19}>대학로 유니플렉스 2관</Col>
            </Row>
            <Row className="main_info">
              <Col span={5}>시간</Col>
              <Col span={19}>
                {`${moment(date).format('YYYY-MM-DD')} ~ ${moment(
                  date + 1,
                ).format('YYYY-MM-DD')}`}
                &nbsp;&nbsp;<S.StyledLink to="/">관람시간보기</S.StyledLink>
              </Col>
            </Row>
            <Row className="main_info">
              <Col span={5}>출연</Col>
              <Col span={19}>
                박시원, 원종환, 유성재, 강정우, 주민진, 유제윤, 김지은, 홍승만,
                정대헌&nbsp;&nbsp;<S.StyledLink to="/">더보기</S.StyledLink>
              </Col>
            </Row>
            <Divider />
            <Row justify="space-between">
              <Col span={5}>가격정보</Col>
              <Col span={3}>
                <S.StyledLink to="/">더보기</S.StyledLink>
              </Col>
            </Row>
            <Divider />
            <Row>
              {performanceCost.map((cost) => (
                <>
                  <Col span={5}>{cost.type}석</Col>
                  <Col span={19}>{cost.cost}원</Col>
                </>
              ))}
            </Row>
          </S.MainInfoTextWrap>
        </Row>
      </S.MainInfoContainer>
    </>
  );
}

const S: any = {};

S.MainInfoContainer = styled.div`
  border: 1px solid ${palette.gray5};
  height: 100%;
  width: 100%;
  padding: 2rem 3rem;
  & .main_info {
    margin-bottom: 1rem;
  }
`;

S.MainInfoTextWrap = styled(Col)`
  padding: 1rem 0;
`;

interface CoverImageProps {
  coverImg: string;
}
S.CoverImage = styled.div<CoverImageProps>`
  height: 24rem;
  width: 25rem;
  background: url(${(props) => props.coverImg});
  background-position: 50% 50%;
  background-size: cover;
` as FC<CoverImageProps>;

S.StyledLink = styled(Link)`
  color: blue;
  text-decoration: underline;
`;
