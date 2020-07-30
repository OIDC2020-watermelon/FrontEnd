import React from 'react';
import styled from 'styled-components';
import BookManagerFilter from '../components/manage/BookManagerFilter';
import BookList from '../components/manage/BookList';
import BookCanclePolicy from '../components/manage/booklist/BookCanclePolicy';

export default function ManagePage() {
  return (
    <>
      <S.ManagePageContainer>
        <BookManagerFilter />
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
