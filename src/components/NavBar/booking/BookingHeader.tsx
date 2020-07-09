import React from 'react';
import styled from 'styled-components';
import { Input, Button, Select } from 'antd';

const { Option } = Select;

const Header = () => {
  const SelectChange = (e: any) => {
    console.log(e);
  };

  const onSearch = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <S.HeaderContainer>
        <S.SearchBar>
          <S.SearchBarTitle>
            <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
              공연별
            </div>
          </S.SearchBarTitle>

          <S.AntComponent>
            <S.SearchBarInput />
          </S.AntComponent>

          <S.SearchBarTitle style={{ flex: 1.5 }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
              카테고리별
            </div>
          </S.SearchBarTitle>

          <S.AntComponent>
            <S.SearchBarSelect defaultValue="콘서트" onChange={SelectChange}>
              <Option value="콘서트">콘서트</Option>
              <Option value="연극">연극</Option>
              <Option value="클래식/무용">클래식/무용</Option>
              <Option value="전시/행사">전시/행사</Option>
            </S.SearchBarSelect>
          </S.AntComponent>
        </S.SearchBar>

        <S.HeaderButtonLayout>
          <S.OverButton onClick={onSearch}>조회하기</S.OverButton>
        </S.HeaderButtonLayout>
      </S.HeaderContainer>
    </>
  );
};

export default Header;

const S: any = {};

S.HeaderContainer = styled.div`
  padding: 30px;
  border: 1px solid;
  margin: 0 5%;
  min-width: 570px;
`;

S.SearchBar = styled.div`
  display: flex;
  margin: 0 15%;
`;

S.SearchBarTitle = styled.div`
  flex: 1;
  display: table;
  height: 30px;
  margin-right: 5px;
`;

S.AntComponent = styled.div`
  flex: 3;
`;
S.SearchBarInput = styled(Input)`
  width: 80%;
`;
S.SearchBarSelect = styled(Select)`
  width: 80%;
`;

S.HeaderButtonLayout = styled.div`
  text-align: right;
`;

S.OverButton = styled(Button)``;
