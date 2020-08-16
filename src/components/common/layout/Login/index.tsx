import React from 'react';
import styled from 'styled-components';
import NaverLoginCallback from './NaverLoginCallback';

const index = () => {
  return (
    <>
      <LoginLayout>
        <LoginTitle>SNS 로그인</LoginTitle>

        <div>
          <NaverLoginCallback />
        </div>
      </LoginLayout>
    </>
  );
};

const S: any = {};

S.FooterContainer = styled.div`
  padding: 0 2rem;
  text-align: center;
  max-height: 20rem;
  width: 100%;
`;

const LoginLayout = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  border: 1px solid lightgray;
  border-radius: 8px;
`;

const LoginTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
export default index;
