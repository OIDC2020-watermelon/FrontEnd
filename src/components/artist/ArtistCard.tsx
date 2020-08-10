import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import moment from 'moment';

export default function ArtistCard({ data }: any) {
  return (
    <>
      <S.TitleContainer style={{ borderBottom: '1px solid' }}>
        <S.TitleContent style={{ textAlign: 'left' }}>
          <S.TitleContentLeft style={{ marginRight: 30 }}>
            <img
              alt="example"
              src="https://source.unsplash.com/random"
              width={200}
              height={200}
            />
          </S.TitleContentLeft>

          <S.TitleContentRight style={{ flex: 'none' }}>
            <S.TitleContentRightName>이름</S.TitleContentRightName>

            <S.TitleContentRightDesc>직업</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>데뷔년도</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>생년월일</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>신체조건</S.TitleContentRightDesc>

            <S.TitleContentRightDesc>SNS</S.TitleContentRightDesc>
          </S.TitleContentRight>
        </S.TitleContent>

        <S.TitleContent style={{ flex: 6, textAlign: 'left' }}>
          <S.TitleContentRight>
            <S.TitleContentRightName>{data?.name}</S.TitleContentRightName>

            <S.TitleContentRightDesc>
              {data?.occupation}
            </S.TitleContentRightDesc>

            <S.TitleContentRightDesc>
              {moment(data?.debutDate).format('YYYY-MM-DD')}
            </S.TitleContentRightDesc>

            <S.TitleContentRightDesc>
              {moment(data?.birthData).format('YYYY-MM-DD')}
            </S.TitleContentRightDesc>

            <S.TitleContentRightDesc>
              {data?.height}cm / {data?.weight}kg
            </S.TitleContentRightDesc>

            <S.TitleContentRightDesc>
              <a href={data?.instagramUrl}>인스타그램</a> |
              <a href={data?.twitterUrl}>트위터</a> |
              <a href={data?.facebookUrl}>페이스북</a>
            </S.TitleContentRightDesc>
          </S.TitleContentRight>
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
