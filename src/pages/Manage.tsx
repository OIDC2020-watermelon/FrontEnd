import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BookList from '../components/manage/BookList';
import BookCanclePolicy from '../components/manage/booklist/BookCanclePolicy';
import message from '../lib/utils/message';
import { useAuth } from '../models/hook/providers/auth/AuthProvider';

export default function ManagePage() {
  const [{ data: user }] = useAuth();
  const history = useHistory();

  if (!user) {
    message('로그인 후 이용해주세요.');
    history.push('/');
  }

  return (
    <>
      <S.ManagePageContainer>
        <BookList />
        <BookCanclePolicy />
      </S.ManagePageContainer>
    </>
  );
}

const S: any = {};

S.ManagePageContainer = styled.div`
  max-width: 1130px;
  margin: 0 auto;
`;
