import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';

export default function BookListHeader({
  managesLen,
  statusButton,
}: {
  managesLen: number;
  statusButton: any;
}) {
  return (
    <>
      <S.BookListHeadWrap justify="space-between" align="middle">
        <Col>
          <span>총 {managesLen}건의 검색 기록이 있습니다.</span>
        </Col>
        <Col>
          <S.FilterLinkWrap>
            <span>상태별 조회&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <S.CustomLink
              onClick={() => {
                statusButton('all');
              }}
            >
              전체
            </S.CustomLink>
            <span>|</span>
            <S.CustomLink
              onClick={() => {
                statusButton('cancel');
              }}
            >
              취소
            </S.CustomLink>
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
  width: 10rem;
  display: flex;
  justify-content: space-between;
`;
