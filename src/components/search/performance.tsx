import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Pagination, Select } from 'antd';
import { PerformanceList } from './index';

const { Option } = Select;

const Performance = ({
  PerformanceList,
}: {
  PerformanceList: PerformanceList;
}) => {
  const [arraySlice, setArraySlice] = useState<number>(0);
  const [performanceList, setPerformanceList] = useState<PerformanceList>(
    PerformanceList,
  );
  const [category, setCategory] = useState<string>('');

  const SelectChange = (e: any) => {
    console.log(e);
    setCategory(e);
  };

  const SelectSituration = (e: any) => {};
  const paginationButton = (e: any) => {
    console.log(e);
    let pageNum = e - 1;
    setArraySlice(4 * pageNum);
  };

  useEffect(() => {
    const categoryData = {
      list: PerformanceList.list.filter((item: any) =>
        item.type.includes(category),
      ),
    };

    setPerformanceList(categoryData);
  }, [category, PerformanceList]);

  return (
    <>
      <S.HeaderContainer>
        <S.SearchBar>
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

          <S.SearchBarTitle style={{ flex: 1.5 }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
              판매
            </div>
          </S.SearchBarTitle>

          <S.AntComponent>
            <S.SearchBarSelect defaultValue="전체" onChange={SelectSituration}>
              <Option value="전체">전체</Option>
              <Option value="판매예정">판매예정</Option>
              <Option value="판매중">판매중</Option>
              <Option value="판매종료">판매종료</Option>
            </S.SearchBarSelect>
          </S.AntComponent>
        </S.SearchBar>
      </S.HeaderContainer>

      <S.ContentLayout>
        {performanceList.list.slice(arraySlice, arraySlice + 4).length === 0 ? (
          <S.TitleContainer style={{ padding: 20, borderBottom: '1px solid' }}>
            <S.TitleContentName style={{ flex: 4, textAlign: 'left' }}>
              상품기본정보(총{performanceList.list.length}건)
            </S.TitleContentName>

            <S.TitleContentName>일시</S.TitleContentName>

            <S.TitleContentName>장소</S.TitleContentName>

            <S.TitleContentName style={{ textAlign: 'center' }}>
              예매
            </S.TitleContentName>
          </S.TitleContainer>
        ) : (
          <S.TitleContainer style={{ padding: 20 }}>
            <S.TitleContentName style={{ flex: 4, textAlign: 'left' }}>
              공연 정보 (총{performanceList.list.length}건)
            </S.TitleContentName>

            <S.TitleContentName>일시</S.TitleContentName>

            <S.TitleContentName>장소</S.TitleContentName>

            <S.TitleContentName style={{ textAlign: 'center' }}>
              예매
            </S.TitleContentName>
          </S.TitleContainer>
        )}

        {performanceList.list
          .slice(arraySlice, arraySlice + 4)
          .map((list, key) => {
            return (
              <div key={key}>
                {key ===
                performanceList.list.slice(arraySlice, arraySlice + 4).length -
                  1 ? (
                  <S.TitleContainer style={{ borderBottom: '1px solid' }}>
                    <S.TitleContent style={{ flex: 4, textAlign: 'left' }}>
                      <S.TitleContentLeft>
                        <img
                          alt="example"
                          src="https://source.unsplash.com/random"
                          width={100}
                          height={100}
                        />
                      </S.TitleContentLeft>

                      <S.TitleContentRight>
                        <S.TitleContentRightName>
                          {list.title}
                        </S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          {list.type} | {list.time}분 | {list.age}세이상
                          관람가능
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          {list.artist.map((art, idx) => {
                            if (idx === 0) {
                              return <span key={idx}>아티스트 : {art}, </span>;
                            } else if (idx + 1 === list.artist.length) {
                              return <span key={idx}>{art}</span>;
                            } else {
                              return <span key={idx}>{art}, </span>;
                            }
                          })}
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>

                    <S.TitleContent>{list.Date}</S.TitleContent>

                    <S.TitleContent>{list.place}</S.TitleContent>

                    <S.TitleContent
                      style={{ textAlign: 'center', display: 'block' }}
                    >
                      예매하기
                    </S.TitleContent>
                  </S.TitleContainer>
                ) : (
                  <S.TitleContainer key={key}>
                    <S.TitleContent style={{ flex: 4, textAlign: 'left' }}>
                      <S.TitleContentLeft>
                        <img
                          alt="example"
                          src="https://source.unsplash.com/random"
                          width={100}
                          height={100}
                        />
                      </S.TitleContentLeft>

                      <S.TitleContentRight>
                        <S.TitleContentRightName>
                          {list.title}
                        </S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          {list.type} | {list.time}분 | {list.age}세이상
                          관람가능
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          {list.artist.map((art, idx) => {
                            if (idx === 0) {
                              return <span key={idx}>아티스트 : {art}, </span>;
                            } else if (idx + 1 === list.artist.length) {
                              return <span key={idx}>{art}</span>;
                            } else {
                              return <span key={idx}>{art}, </span>;
                            }
                          })}
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>

                    <S.TitleContent>{list.Date}</S.TitleContent>

                    <S.TitleContent>{list.place}</S.TitleContent>

                    <S.TitleContent
                      style={{ textAlign: 'center', display: 'block' }}
                    >
                      예매하기
                    </S.TitleContent>
                  </S.TitleContainer>
                )}
              </div>
            );
          })}

        <Pagination
          defaultCurrent={1}
          total={performanceList.list.length}
          style={{ textAlign: 'center', marginTop: 30 }}
          pageSize={4}
          onChange={paginationButton}
        />
      </S.ContentLayout>
    </>
  );
};

export default Performance;

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
`;

S.TitleContentRightName = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

S.TitleContentRightDesc = styled.div`
  margin-top: 15px;
`;
