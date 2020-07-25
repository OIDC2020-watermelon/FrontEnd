import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const urlLocation = window.location.pathname;
  let urlTypes: string;
  if (urlLocation === '/') {
    urlTypes = '1';
  } else if (urlLocation === '/booking') {
    urlTypes = '2';
  } else if (urlLocation === '/mypage' || urlLocation === '/leave') {
    urlTypes = '3';
  } else {
    urlTypes = '4';
  }
  return (
    <>
      <S.StyledMenu defaultSelectedKeys={[urlTypes]} mode="inline" theme="dark">
        <Menu.Item key="1">
          <Link to="/">공연정보</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/booking">공연예매</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/mypage">마이페이지</Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/manage">예매관리</Link>
        </Menu.Item>
      </S.StyledMenu>
    </>
  );
}

const S: any = {};

S.StyledMenu = styled(Menu)`
  max-width: 1130px;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0 auto;
`;
