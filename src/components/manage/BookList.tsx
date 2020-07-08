import React from 'react';
import { Button, Row, Col } from 'antd';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
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

const S: any = {};
