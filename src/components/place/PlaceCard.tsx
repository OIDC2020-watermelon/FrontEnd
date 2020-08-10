import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

export default function PlaceCard({ data }: any) {
  return (
    <>
      <S.TitleContainer style={{ borderBottom: '1px solid' }}>
        <S.TitleContent style={{ flex: 3, textAlign: 'left' }}>
          <S.TitleContentLeft>
            <img
              alt="example"
              src="https://source.unsplash.com/random"
              width={100}
              height={100}
            />
          </S.TitleContentLeft>

          <S.TitleContentRight>
            <S.TitleContentRightName>공연장 명</S.TitleContentRightName>

            <S.TitleContentRightDesc>주소</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>전화</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>홈페이지</S.TitleContentRightDesc>
          </S.TitleContentRight>
        </S.TitleContent>

        <S.TitleContent style={{ flex: 6, textAlign: 'left' }}>
          <S.TitleContentRight>
            <S.TitleContentRightName>{data?.name}</S.TitleContentRightName>

            <S.TitleContentRightDesc>{data?.address}</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>{data?.telephone}</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>
              {data?.homepage.slice(0, 100)}
            </S.TitleContentRightDesc>
          </S.TitleContentRight>
        </S.TitleContent>

        <S.TitleContent
          style={{ textAlign: 'center', display: 'block', flex: 3 }}
        >
          상세보기
        </S.TitleContent>
      </S.TitleContainer>
    </>
  );
}

const S: any = {};

S.HeaderContainer = styled.div`
  padding: 30px;
  border: 1px solid;
  margin: 0 5%;
  margin-top: 30px;
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

S.SearchBarSelect = styled(Select)`
  width: 80%;
`;

S.ContentLayout = styled.div`
  margin-top: 3%;
  min-width: 570px;
`;
S.TitleContainer = styled.div`
  padding: 15px;
  border: 1px solid;
  border-bottom: none;
  margin: 0 5%;
  display: flex;
`;

S.TitleContentName = styled.div`
  flex: 1;
  margin-right: 10px;
  text-align: left;
`;

S.TitleContent = styled.div`
  flex: 1;
  margin-right: 10px;
  text-align: left;
  display: flex;
`;

S.TitleContentLeft = styled.div`
  flex: 1;
  min-width: 120px;
`;

S.TitleContentRight = styled.div`
  flex: 3;
  min-width: 70px;
`;

S.TitleContentRightName = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

S.TitleContentRightDesc = styled.div`
  margin-top: 15px;
`;
