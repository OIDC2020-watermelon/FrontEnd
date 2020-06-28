import React from 'react';
import styled from 'styled-components';

interface AppFooterProps {}

const AppHeader = () => {
  return (
    <>
      <S.HeaderContainer>
        {/* Footer */}
        <header>
          <h6>Header</h6>
          <p>Something here to give the header a purpose!</p>
        </header>
        {/* End footer */}
      </S.HeaderContainer>
    </>
  );
};

const S: any = {};

S.HeaderContainer = styled.div`
  text-align: center;
  height: 20rem;
  width: 100%;
`;

export default AppHeader;
