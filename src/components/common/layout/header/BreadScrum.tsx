import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BreadScrum({ path }: any) {
  console.log('path', path);
  const mainPath = path.split('/');

  console.log('mainPath', mainPath);
  const subPathOne = useCallback(() => {
    console.log('pathOne', mainPath[1]);
    switch (mainPath[1]) {
      case 'booking':
        return '공연예매';
      case 'mypage':
        return '마이페이지';
      case 'manage':
        return '예매관리';
      case 'search':
        return '검색';
      case 'performance':
        return '상세보기 > 공연';
      case 'artist':
        return '상세보기 > 아티스트';
      case 'place':
        return '상세보기 > 공연장';
      default:
        return;
    }
  }, [mainPath]);
  const subPathTwo = useCallback(() => {
    switch (mainPath[2]) {
      case 'performance':
        return '공연';
      case 'artist':
        return '아티스트';
      case 'place':
        return '공연장';
      default:
        return;
    }
  }, [mainPath]);

  return (
    <>
      <div>
        <FontAwesomeIcon icon="home" size="1x" />
        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
        <span>{mainPath[1] === '' ? '공연정보' : subPathOne()}</span>
        {subPathTwo() && (
          <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;{subPathTwo()}</span>
        )}
      </div>
    </>
  );
}
