import React from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';

interface AppFooterProps {}

const AppFooter = () => {
  return (
    <>
      <S.FooterContainer>
        {/* Footer */}
        <footer>
          <Footer />
        </footer>
        {/* End footer */}
      </S.FooterContainer>
    </>
  );
};

const S: any = {};

S.FooterContainer = styled.div`
  text-align: center;
  max-height: 20rem;
  width: 100%;
  background: black;
`;

export default AppFooter;
