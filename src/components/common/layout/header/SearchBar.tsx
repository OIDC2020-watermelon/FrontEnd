import React from 'react';
import { Input } from 'antd';
import useInput from '../../../../lib/utils/hooks';
import styled from 'styled-components';

const { Search } = Input;

export default function SearchBar() {
  const [searchWord, changeSearchWord, setSearchWord] = useInput<string>('');

  const onSearch = (e: any) => {
    if (searchWord === '') {
      return -1;
    }

    if (window.location.pathname.includes('search')) {
      window.location.replace(`${searchWord}`);
    } else {
      window.location.assign(`search/performance/${searchWord}`);
    }

    setSearchWord('');
  };

  return (
    <>
      <S.StyledSearch
        placeholder="검색어를 입력해주세요."
        enterButton="Search"
        size="large"
        value={searchWord}
        onChange={changeSearchWord}
        onSearch={(value: string) => {
          onSearch(value);
        }}
      />
    </>
  );
}

const S: any = {};

S.StyledSearch = styled(Search)`
  width: 40rem;
`;
