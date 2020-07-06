import React from 'react';
import styled from 'styled-components';
import SearchBar from './header/SearchBar';
import BreadScrum from './header/BreadScrum';
import HeaderLinkList from './header/HeaderLinkList';
import NavBar from './header/NavBar';
import LogoComponent from './header/LogoComponent';
import AdComponent from './header/AdComponent';

interface AppFooterProps {}

const AppHeader = () => {
  return (
    <>
      <S.HeaderContainer>
        {/* Footer */}
        <header>
          <S.Container>
            <BreadScrum />
            <HeaderLinkList />
          </S.Container>
          <S.SearchWrap>
            <LogoComponent />
            <SearchBar />
            <AdComponent />
          </S.SearchWrap>
          <NavBar />
        </header>
        {/* End footer */}
      </S.HeaderContainer>
    </>
  );
};

const S: any = {};

S.HeaderContainer = styled.div`
  text-align: center;
<<<<<<< HEAD
=======
  height: 100%;
>>>>>>> 607813de8aa2ff59dc774b75597f38fe4ee1ba1c
  width: 100%;
  padding: 2rem 2rem 0 2rem;
`;

S.Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

S.SearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
export default AppHeader;
