import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../lib/utils/hooks';
import message from '../../lib/utils/message';
import { adminLogin } from '../../models/saga/reducers/admin';
import CustomInput from '../common/input/CustomInput';

export default function AdminLoginForm() {
  const [email, changeEmail, setEmail] = useInput<string>('');
  const [password, changePassword, setPassword] = useInput<string>('');
  const dispatch = useDispatch();

  const onClickAdminLogin = useCallback(() => {
    if (![email, password].every(Boolean)) {
      message('로그인 정보를 입력해주세요');
      return;
    }
    setEmail('');
    setPassword('');
    dispatch(adminLogin.request({ email, password }));
  }, [email, password, setEmail, setPassword, dispatch]);
  return (
    <>
      <S.Container>
        <S.Form>
          <CustomInput
            value={email}
            placeholder="email..."
            name="email"
            onChange={changeEmail}
          />
          <CustomInput
            value={password}
            placeholder="password..."
            name="password"
            onChange={changePassword}
          />
          <Button type="primary" onClick={onClickAdminLogin}>
            로그인
          </Button>
        </S.Form>
      </S.Container>
    </>
  );
}

const S: any = {};

S.Container = styled.div`
  position: relative;
  height: 30rem;
`;

S.Form = styled.form`
  height: 8rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
