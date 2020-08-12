import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../../modal/Modal';
import Login from '../../layout/Login';
import { useAuth } from '../../../../models/hook/providers/auth/AuthProvider';

interface HeaderLinkListProps {
  login: boolean;
}
export default function HeaderLinkList({ login }: HeaderLinkListProps) {
  const [visible, setVisible] = useState(false || login);
  const [{ data }, logout] = useAuth();
  return (
    <>
      <S.LinkListWrap>
        <Link to="/">
          <S.LinkItem>메인</S.LinkItem>
        </Link>
        {data?.name ? (
          <S.LinkLogin onClick={logout}>
            <S.LinkItem>로그아웃</S.LinkItem>
          </S.LinkLogin>
        ) : (
          <S.LinkLogin onClick={() => setVisible(!visible)}>
            <S.LinkItem>로그인</S.LinkItem>
          </S.LinkLogin>
        )}

        <Link to="/mypage">
          <S.LinkItem>내정보</S.LinkItem>
        </Link>
      </S.LinkListWrap>
      <Modal visible={visible} setVisible={setVisible} render={<Login />} />
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

S.LinkLogin = styled.div`
  &:hover {
    color: #1890ff;
    cursor: pointer;
    transition: color 0.3s;
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;
