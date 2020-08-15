import React from 'react';
import Index from '../components/admin';
import messageCustom from '../lib/utils/message';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../models/hook/providers/auth/AuthProvider';

export default function AdminPage() {
  const [{ data: user }] = useAuth();
  const history = useHistory();
  // if (!user) {
  //   messageCustom('로그인 후 이용해주세요.');
  //   history.push('/');
  // }
  return (
    <>
      <Index />
    </>
  );
}
