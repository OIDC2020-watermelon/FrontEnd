import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import kakao from '../../../../../src/assets/images/kakao.png';

export default function KakaoLoginButton() {
  const onSuccess = (data: any) => {
    console.log('로그인 성공', data);
  };
  const onFailure = (data: any) => {
    console.log('로그인 실패', data);
  };
  return (
    <div>
      <KakaoLogin
        jsKey={'ab8785b7a2bf1392b79f98e0266ae60e'}
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={(props: any) => (
          <LoginModalButtonLayout>
            <button
              onClick={props.onClick}
              style={KakaoButtonStyled}
              disabled={props.disabled}
            >
              <ImageStyled src={kakao} />
              카카오 계정으로 로그인
            </button>
          </LoginModalButtonLayout>
        )}
        getProfile={true}
      />
    </div>
  );
}

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
