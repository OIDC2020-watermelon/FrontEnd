import React, { ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

interface MenuProps {
  key: number;
  item: MenuProps;
  keyPath: Array<string>;
  domEvent: DocumentEvent;
}

const Title = ({ flag }: { flag: string }) => {
  const handleClick = (e: MenuProps) => {
    console.log('click ', e);
    console.log(e.key);
  };

  return (
    <>
      <S.MypageLayoutTitle>
        <S.StyledMenu
          selectedKeys={[flag]}
          mode="inline"
          theme="dark"
          onClick={handleClick}
        >
          <Menu.Item key="1">
            <Link to="mypage">회원 정보 수정</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="leave">회원 탈퇴</Link>
          </Menu.Item>
        </S.StyledMenu>

        <S.MypageTitleContent>
          {flag === '1' ? <>회원 정보 수정</> : <>회원 탈퇴</>}
        </S.MypageTitleContent>
      </S.MypageLayoutTitle>
    </>
  );
};

export default Title;

const S: any = {};

S.MypageLayoutTitle = styled.div`
  display: flex;
`;

S.StyledMenu = styled(Menu)`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1.2;
`;

S.MypageTitleContent = styled.div`
  flex: 8.8;
  margin-left: 3%;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 1px solid;
  margin-top: 8px;
`;
