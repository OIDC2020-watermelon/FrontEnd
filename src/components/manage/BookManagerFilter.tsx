import React from 'react';
import { Button, Row, Col } from 'antd';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import palette from '../../lib/style/palette';

const { RangePicker } = DatePicker;

export default function BookManagerFilter() {
  return (
    <>
      <S.FilterContainer>
        <Row align="middle" justify="start">
          <Col>
            <span>
              소요시간&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Col>
          <Col>
            <RangePicker />
          </Col>
          <S.FilterText>
            <span>최대 2개월까지 조회 가능합니다.</span>
          </S.FilterText>
        </Row>
        <Row align="middle" justify="space-between">
          <Col>
            <S.FilterLinkWrap>
              <span>기간별&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <S.CustomLink>7일</S.CustomLink>
              <span>|</span>
              <S.CustomLink>15일</S.CustomLink>
              <span>|</span>
              <S.CustomLink>1개월</S.CustomLink>
              <span>|</span>
              <S.CustomLink>2개월</S.CustomLink>
            </S.FilterLinkWrap>
          </Col>

          <Col>
            <Button type="primary">조회</Button>
          </Col>
        </Row>
      </S.FilterContainer>
    </>
  );
}

const S: any = {};

S.FilterContainer = styled.div`
  width: 100%;
  height: 8rem;
  border-radius: 5px;
  border: 1px solid ${palette.gray6};
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

S.FilterText = styled(Col)`
  margin-left: 1.5rem;
`;

S.CustomLink = styled.span`
  color: ${palette.blue6};
  cursor: pointer;
  &:hover {
    color: ${palette.blue4};
  }
`;

S.FilterLinkWrap = styled(Col)`
  width: 18rem;
  display: flex;
  justify-content: space-between;
`;
