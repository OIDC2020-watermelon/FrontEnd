import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function HeaderLinkList() {
  return (
    <>
      <S.LinkListWrap>
        <Link to="/">
          <S.LinkItem>메인</S.LinkItem>
        </Link>
        <Link to="/">
          <S.LinkItem>로그인</S.LinkItem>
        </Link>
        <Link to="/">
          <S.LinkItem>회원가입</S.LinkItem>
        </Link>
        <Link to="/">
          <S.LinkItem>내정보</S.LinkItem>
        </Link>
      </S.LinkListWrap>
    </>
  );
}

const S: any = {};

S.LinkListWrap = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

S.LinkItem = styled.li`
  padding-left: 0.5rem;
`;
