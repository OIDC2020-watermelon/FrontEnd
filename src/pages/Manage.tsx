import React from 'react';
import BookManagerFilter from '../components/manage/BookManagerFilter';
import styled from 'styled-components';
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
  padding: 0 10rem;
  @media screen and (max-width: 1100px) {
    padding: 0rem 5rem;
  }
  @media screen and (max-width: 950px) {
    padding: 0rem 1rem;
  }
`;
