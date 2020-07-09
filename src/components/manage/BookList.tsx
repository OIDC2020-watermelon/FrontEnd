import React from 'react';
import BookListContents from './booklist/BookListContents';
import BookListHeader from './booklist/BookListHeader';

export default function BookList() {
  return (
    <>
      <BookListHeader />
      <BookListContents />
    </>
  );
}
