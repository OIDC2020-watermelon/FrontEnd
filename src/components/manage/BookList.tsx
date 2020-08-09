import React, { useEffect, useState } from 'react';
import BookManagerFilter from './BookManagerFilter';
import BookListContents from './booklist/BookListContents';
import BookListHeader from './booklist/BookListHeader';
import { getManage } from '../../models/saga/reducers/manage';
import store from '../../models/configure';
import { useDispatch } from 'react-redux';

export default function BookList() {
  const [manage, setManage] = useState<any>({ data: [], error: '' });

  const dispatch = useDispatch();

  store.subscribe(() => {
    var result = {
      data: store
        .getState()
        .manage.manages.data.map(function (el: any, idx: number) {
          var o = Object.assign({ key: idx }, el);
          o.isActive = true;
          return o;
        }),
      error: '',
    };
    setManage(result);
  });

  useEffect(() => {
    // userid 1 테스트
    dispatch(getManage.request({ userId: 1 }));
  }, [dispatch]);

  const onOkPicker = (value: any, datastring: Array<string>) => {
    console.log('value : ', datastring);
  };
  console.log('List : ', manage);
  return (
    <>
      <BookManagerFilter onOkPicker={onOkPicker} />
      <BookListHeader managesLen={manage.data.length} />
      <BookListContents manages={manage} />
    </>
  );
}
