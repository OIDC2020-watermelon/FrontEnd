import React from 'react';
import styled from 'styled-components';
import kakao from '../../../../../src/assets/images/kakao.png';
import naver from '../../../../../src/assets/images/naver.png';
import google from '../../../../../src/assets/images/google.png';
const index = () => {
  return (
    <>
      <LoginLayout>
        <LoginTitle>SNS 로그인</LoginTitle>

        <div>
          <LoginModalButtonLayout>
            <button onClick={(e) => {}} style={KakaoButtonStyled}>
              <ImageStyled src={kakao} />
              카카오 계정으로 로그인
            </button>
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
            <button style={NaverButtonStyled}>
              <ImageStyled src={naver} />
              네이버 계정으로 로그인
            </button>
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
            <button style={GoogleButtonStyled}>
              <ImageStyled src={google} />
              구글 계정으로 로그인
            </button>
          </LoginModalButtonLayout>
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
  width: 35%;
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
const LoginModalButtonLayout = styled.div`
  text-align: center;
  height: 40px;
  margin-bottom: 16px;
  font-size: 0.75rem;
  font-weight: bold;
`;

const ImageStyled = styled.img`
  margin-right: 2%;
  top: 0.2vh;
  position: relative;
`;

const KakaoButtonStyled = {
  background: '#F9E032',
  borderRadius: '8px',
  height: '100%',
  borderWidth: 'inherit',
  color: 'black',
  fontFamily: 'SpoqaHanSans',
  fontSize: '0.75rem',
  fontWeight: 600,
  minWidth: 170,
  minHeight: 25,
  outlineWidth: 0,
  cursor: 'pointer',
  width: '100%',
};

const NaverButtonStyled = {
  background: '#2DC622',
  borderRadius: '8px',
  height: '100%',
  borderWidth: 'inherit',
  color: '#E2E1E2',
  fontFamily: 'SpoqaHanSans',
  fontSize: '0.75rem',
  fontWeight: 600,
  minWidth: 170,
  minHeight: 25,
  cursor: 'pointer',
  width: '100%',
};

const GoogleButtonStyled = {
  background: '#6863FC',
  borderRadius: '8px',
  height: '100%',
  borderWidth: 'inherit',
  width: '100%',
  color: '#E2E1E2',
  fontFamily: 'SpoqaHanSans',
  fontSize: '0.75rem',
  fontWeight: 600,
  minWidth: 170,
  minHeight: 25,
  cursor: 'pointer',
};

export default index;
