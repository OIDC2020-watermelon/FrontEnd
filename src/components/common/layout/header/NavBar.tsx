import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';

export default function NavBar() {
  return (
    <>
      <S.StyledMenu defaultSelectedKeys={['1']} mode="inline" theme="dark">
        <Menu.Item key="1">공연정보</Menu.Item>
        <Menu.Item key="2">공연예매</Menu.Item>
        <Menu.Item key="3">마이페이지</Menu.Item>
        <Menu.Item key="4">예매관리</Menu.Item>
      </S.StyledMenu>
    </>
  );
}

const S: any = {};

S.StyledMenu = styled(Menu)`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;
