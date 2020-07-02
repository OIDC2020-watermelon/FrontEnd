import React, { useCallback } from 'react';
import { Input } from 'antd';
import useInput from '../../../../lib/utils/hooks';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const { Search } = Input;

export default function SearchBar() {
  const [searchWord, changeSearchWord, setSearchWord] = useInput<string>('');
  const history = useHistory();

  const onSaerch = useCallback(() => {
    history.push(`/`);
    setSearchWord('');
  }, [searchWord, history]);

  return (
    <>
      <S.StyledSearch
        placeholder="input search text"
        enterButton="Search"
        size="large"
        value={searchWord}
        onChange={changeSearchWord}
        onSearch={onSaerch}
      />
    </>
  );
}

const S: any = {};

S.StyledSearch = styled(Search)`
  width: 40rem;
`;
