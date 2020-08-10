import React, { useEffect } from 'react';
import styled from 'styled-components';
import NaverImg from '../../../../../src/assets/images/naver.png';

declare global {
  interface Window {
    naver: any;
    IMP: any;
  }
  const naver: any;
  const IMP: any;
}

interface OnSuccessParameter {
  accessToken: string;
  socialId: string;
  name?: string;
  email?: string;
}

interface NaverButtonProps {
  callbackUrl?: string;
  clientId?: string;
  onSuccess: (data: OnSuccessParameter) => void;
  onFailure: () => void;
}

const NAVER_ID_SDK_URL =
  'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';

const initLoginButton = function (props: any) {
  if (typeof window === 'undefined') {
    return;
  }
  const clientId = process.env.REACT_APP_NAVER_CLIENT_ID,
    callbackUrl = 'http://101.101.218.225/login';
  const onSuccess = props.onSuccess;
  const onFailure = props.onFailure;
  const location = window.location;
  const { naver } = window;

  const naverLogin = new naver.LoginWithNaverId({
    callbackUrl: callbackUrl,
    clientId: clientId,
    isPopup: true,
    loginButton: { color: 'green', type: 3, height: 60 },
    callbackHandle: true,
    scope: {},
  });

  naverLogin.init();

  if (!window.opener) {
    naver.successCallback = function (data: OnSuccessParameter) {
      console.log('OPENER');
      return onSuccess(data);
    };
    naver.FailureCallback = onFailure;
  } else {
    naverLogin.getLoginStatus(function (status: any) {
      if (!status || location.hash.indexOf('#access_token') === -1) {
        return;
      }
      const accessToken = window.location.hash
        .split('&')[0]
        .slice(1)
        .split('=')[1];
      console.log(naverLogin);
      window.opener.naver.successCallback({
        socialId: naverLogin.user.id,
        accessToken,
        name: naverLogin.user.name,
        email: naverLogin.user.email,
      });
      window.close();
    });
  }
};

const appendNaverButton = function () {
  if (document && document.querySelectorAll('#naverIdLogin').length === 0) {
    const naverId = document.createElement('div');
    naverId.id = 'naverIdLogin';
    naverId.style.position = 'absolute';
    naverId.style.top = '-10000px';
    document.body.appendChild(naverId);
  }
};

const loadScript = function (props: any) {
  if (document && document.querySelectorAll('#naver-login-sdk').length === 0) {
    const script = document.createElement('script');
    script.id = 'naver-login-sdk';
    script.src = NAVER_ID_SDK_URL;
    script.onload = function () {
      return initLoginButton(props);
    };
    document.head.appendChild(script);
  }
};

const componentDidMount = (props: NaverButtonProps) => {
  if (typeof window === 'undefined') {
    return;
  }
  loadScript(props);
  appendNaverButton();
};

const NaverLoginButton: React.FC<NaverButtonProps> = (props) => {
  useEffect(() => componentDidMount(props), [props]);

  return (
    <LoginModalButtonLayout
      className="login-button-bottom"
      onClick={() => {
        if (
          !document ||
          !(document as any).querySelector('#naverIdLogin').firstChild
        )
          return;
        const naverLoginButton: any = (document as any).querySelector(
          '#naverIdLogin',
        ).firstChild;
        naverLoginButton.click();
      }}
    >
      <button style={NaverButtonStyled}>
        <ImageStyled src={NaverImg} alt="네이버 아이디로 로그인" />
        네이버 계정으로 로그인
      </button>
    </LoginModalButtonLayout>
  );
};

export default NaverLoginButton;

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
