import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../../models/saga/reducers/auth';
import NaverLogin from './NaverLogin';

export default function NaverLoginCallback() {
  const dispatch = useDispatch();
  const onSuccess = (data: any) => {
    console.log('로그인 성공', data);
    if (data) {
      dispatch(
        login.request({ provider: 'naver', accessToken: data.accessToken }),
      );
    }
  };
  const onFailure = () => {
    console.log('로그인 실패');
  };
  return (
    <div>
      <NaverLogin
        clientId={process.env.REACT_APP_NAVER_CLIENT_ID}
        callbackUrl={process.env.REACT_APP_NAVER_CALLBACK_URL}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
