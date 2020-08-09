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
            <HeaderLinkList
              login={window.location.pathname.includes('login')}
            />
          </S.Container>
          <S.SearchWrap>
            <LogoComponent />
            <SearchBar />
            <AdComponent />
          </S.SearchWrap>
        </header>
        {/* End footer */}
      </S.HeaderContainer>
      <S.NavContainer>
        {window.location.pathname.includes('/search/') ? (
          ''
        ) : window.location.pathname.includes('/artist/') ? (
          ''
        ) : window.location.pathname.includes('/place/') ? (
          ''
        ) : window.location.pathname.includes('/admin') ? (
          ''
        ) : (
          <NavBar />
        )}
      </S.NavContainer>
    </>
  );
};

const S: any = {};

S.HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  max-width: 1130px;
  margin: 0 auto;
`;

S.Container = styled.div`
  max-width: 1130px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

S.SearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

S.NavContainer = styled.div`
  width: 100%;
  background: black;
`;
export default AppHeader;
