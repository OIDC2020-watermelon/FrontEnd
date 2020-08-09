import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';

export default function BookListHeader({ managesLen }: { managesLen: number }) {
  console.log('managesLen : ', managesLen);
  return (
    <>
      <S.BookListHeadWrap justify="space-between" align="middle">
        <Col>
          <span>총 {managesLen}건의 검색 기록이 있습니다.</span>
        </Col>
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
      </S.BookListHeadWrap>
    </>
  );
}

const S: any = {};

S.BookListHeadWrap = styled(Row)`
  padding-top: 2rem;
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
