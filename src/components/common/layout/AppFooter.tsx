import React from 'react';
import styled from 'styled-components';
import Copyright from './Copyright';

interface AppFooterProps {}

const AppFooter = () => {
  return (
    <>
      <S.FooterContainer>
        {/* Footer */}
        <footer>
          <h6>Footer</h6>
          <p>Something here to give the footer a purpose!</p>
          <Copyright />
        </footer>
        {/* End footer */}
      </S.FooterContainer>
    </>
  );
};

const S: any = {};

S.FooterContainer = styled.div`
  text-align: center;
  height: 20rem;
  width: 100%;
`;

export default AppFooter;
