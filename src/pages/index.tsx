import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

export default function MainPage() {
  const date = moment(Date.now()).format('YYYY-MM-DD');
  return (
    <>
        <FontAwesomeIcon icon="smile" size="7x" />
        <div>메인 페이지 입니다.</div>
        <div>{`현재 날짜 : ${date}`}</div>
    </>
  );
}
