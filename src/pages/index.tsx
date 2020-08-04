import React, { useEffect } from 'react';
import Main from '../components/common/layout/Main';
import { useDispatch } from 'react-redux';
import {
  getHotIssue,
  getNew,
  getCommingSoon,
} from '../models/saga/reducers/theme';
export default function MainPage() {
  const page = 0;
  const size = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotIssue.request({ page, size }));
    dispatch(getNew.request({ page, size }));
    dispatch(getCommingSoon.request({ page, size }));
  }, [dispatch]);

  return (
    <>
      <Main />
    </>
  );
}
