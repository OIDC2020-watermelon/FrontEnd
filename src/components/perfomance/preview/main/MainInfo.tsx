import React, { FC } from 'react';
import styled from 'styled-components';
import { Row, Col, Divider } from 'antd';
import palette from '../../../../lib/style/palette';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { performanceCost } from '../../../../assets/dummy/dummyData';
import font from '../../../../lib/style/font';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../models';

export default function MainInfo() {
  const { data } = useSelector(
    (state: RootState) => state.performance.performance,
  );
  if (!data) return null;
  return (
    <>
      <S.MainInfoContainer>
        <Row>
          <Col xs={0} sm={0} md={0} xl={12}>
            <S.CoverImage coverImg="https://source.unsplash.com/random" />
          </Col>
          <S.MainInfoTextWrap xs={24} sm={24} md={24} xl={12}>
            <Row className="main_info">
              <Col span={5} className="main_info_title">
                장소
              </Col>
              <Col span={19} className="main_info_content">
                {data.place.name}
              </Col>
            </Row>
            <Row className="main_info">
              <Col span={5} className="main_info_title">
                시간
              </Col>
              <Col span={19} className="main_info_content">
                {`${moment(data.releaseStartTime).format(
                  'YYYY-MM-DD',
                )} ~ ${moment(data.releaseEndTime).format('YYYY-MM-DD')}`}
                &nbsp;&nbsp;<S.StyledLink to="/">관람시간보기</S.StyledLink>
              </Col>
            </Row>
            <Row className="main_info">
              <Col span={5} className="main_info_title">
                출연
              </Col>
              <Col span={19} className="main_info_content">
                {data.artists.map((artist: any) => `${artist.name} `)}
                &nbsp;&nbsp;<S.StyledLink to="/">더보기</S.StyledLink>
              </Col>
            </Row>
            <Divider />
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
          </S.MainInfoTextWrap>
        </Row>
      </S.MainInfoContainer>
    </>
  );
}

const S: any = {};

S.MainInfoContainer = styled.div`
  border: 1px solid ${palette.gray5};
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding: 2rem 3rem;
  & .main_info {
    margin-bottom: 0.1rem;
  }
  & .main_info_title {
    ${font.boldFont}
    font-size: 1.1rem;
    font-weight: 900;
  }
  & .main_info_content {
    line-height: 2rem;
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
  border-radius: 5px;
  background: url(${(props) => props.coverImg});
  background-position: 50% 50%;
  background-size: cover;
` as FC<CoverImageProps>;

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
