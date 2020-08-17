import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Pagination, Select } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
const { Option } = Select;

const Performance = ({ performances }: { performances: any }) => {
  const [arraySlice, setArraySlice] = useState<number>(0);
  //const [category, setCategory] = useState<string>('');
  const [performancesList, setPerformanceList] = useState<any>({
    data: [],
    error: null,
    issues: null,
  });
  const [selectChangeFlag, setSelectChangeFlag] = useState<boolean>(false);
  const [selectSiturationFlag, setSelectSiturationFlag] = useState<boolean>(
    false,
  );

  const SelectChange = (e: any) => {
    var willFilterData = performances;
    if (e === '전체') {
      setSelectChangeFlag(false);
      setPerformanceList(willFilterData);
      return 1;
    }
    if (selectSiturationFlag) {
      willFilterData = performancesList;
    }

    const categoryData = {
      data: willFilterData.data.filter((item: any) =>
        item.category.includes(e),
      ),
    };
    setSelectChangeFlag(true);
    setPerformanceList(categoryData);
  };

  const SelectSituration = (e: any) => {
    var willFilterData = performances;
    var nowDate = moment();
    let categoryData;

    if (selectChangeFlag) {
      willFilterData = performancesList;
    }

    if (e === '판매예정') {
      //moment('2010-10-20').isBefore('2010-12-31', 'year');
      categoryData = {
        data: willFilterData.data.filter((item: any) =>
          nowDate.isBefore(item.releaseStartTime),
        ),
      };
    } else if (e === '판매종료') {
      categoryData = {
        data: willFilterData.data.filter((item: any) =>
          moment(item.releaseEndTime).isBefore(nowDate),
        ),
      };
    } else if (e === '전체') {
      setPerformanceList(performances);
      setSelectSiturationFlag(false);
      return true;
    } else {
      categoryData = {
        data: willFilterData.data.filter(
          (item: any) =>
            moment(nowDate).isBefore(item.releaseEndTime) &&
            moment(item.releaseStartTime).isBefore(nowDate),
        ),
      };
    }

    setSelectSiturationFlag(true);
    setPerformanceList(categoryData);
  };
  const paginationButton = (e: any) => {
    console.log(e);
    let pageNum = e - 1;
    setArraySlice(4 * pageNum);
  };

  useEffect(() => {
    console.log('changes');
    setPerformanceList(performances);
  }, [performances]);

  // 여기서 사이드 이펙트 존재
  // useEffect(() => {
  // const categoryData = {
  //   data: performancesList.data.filter((item: any) =>
  //     item.category.includes(category),
  //   ),
  // };

  //   setPerformanceList(categoryData);
  // }, [category]);

  //console.log('performancesList : ', performancesList);
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
            <S.SearchBarSelect defaultValue="전체" onChange={SelectChange}>
              <Option value="전체">전체</Option>
              <Option value="콘서트">콘서트</Option>
              <Option value="공연">공연</Option>
              <Option value="클래식/댄스">클래식/댄스</Option>
              <Option value="전시/이벤트">전시/이벤트</Option>
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
        {performancesList.data.slice(arraySlice, arraySlice + 4).length ===
        0 ? (
          <S.TitleContainer style={{ padding: 20, borderBottom: '1px solid' }}>
            <S.TitleContentName style={{ flex: 4, textAlign: 'left' }}>
              상품기본정보(총{performancesList.data.length}건)
            </S.TitleContentName>

            <S.TitleContentName>일시</S.TitleContentName>

            <S.TitleContentName>장소</S.TitleContentName>

            <Link to={`/performace/${performancesList.data.id}`}>
              <S.TitleContentName style={{ textAlign: 'center' }}>
                예매
              </S.TitleContentName>
            </Link>
          </S.TitleContainer>
        ) : (
          <S.TitleContainer style={{ padding: 20 }}>
            <S.TitleContentName style={{ flex: 4, textAlign: 'left' }}>
              공연 정보 (총{performancesList.data.length}건)
            </S.TitleContentName>

            <S.TitleContentName>일시</S.TitleContentName>

            <S.TitleContentName>장소</S.TitleContentName>

            <S.TitleContentName style={{ textAlign: 'center' }}>
              예매
            </S.TitleContentName>
          </S.TitleContainer>
        )}

        {performancesList.data
          .slice(arraySlice, arraySlice + 4)
          .map((list: any, key: number) => {
            return (
              <div key={key}>
                {key ===
                performancesList.data.slice(arraySlice, arraySlice + 4).length -
                  1 ? (
                  <S.TitleContainer style={{ borderBottom: '1px solid' }}>
                    <S.TitleContent style={{ flex: 4, textAlign: 'left' }}>
                      <S.TitleContentLeft>
                        <img
                          alt="thumbnailImgUrl"
                          src={list.thumbnailImgUrl}
                          width={100}
                          height={100}
                        />
                      </S.TitleContentLeft>

                      <S.TitleContentRight>
                        <S.TitleContentRightName>
                          {list.title}
                        </S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          {list.category} | {list.runningTime}분 | {list.rrated}
                          세이상 관람가능
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          {list.artists.map((art: any, idx: number) => {
                            if (idx === 0) {
                              return <span key={idx}>아티스트 : {art}, </span>;
                            } else if (idx + 1 === list.artists.length) {
                              return <span key={idx}>{art}</span>;
                            } else {
                              return <span key={idx}>{art}, </span>;
                            }
                          })}
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>

                    <S.TitleContent>
                      {moment(list.releaseStartTime).format('YYYY-MM-DD')}~
                      {moment(list.releaseEndTime).format('YYYY-MM-DD')}
                    </S.TitleContent>

                    <S.TitleContent>{list.place}</S.TitleContent>

                    <S.TitleContent
                      style={{ textAlign: 'center', display: 'block' }}
                    >
                      <Link to={`/performance/${list.id}`}>예매하기</Link>
                    </S.TitleContent>
                  </S.TitleContainer>
                ) : (
                  <S.TitleContainer key={key}>
                    <S.TitleContent style={{ flex: 4, textAlign: 'left' }}>
                      <S.TitleContentLeft>
                        <img
                          alt="thumbnailImgUrl"
                          src={list.thumbnailImgUrl}
                          width={100}
                          height={100}
                        />
                      </S.TitleContentLeft>

                      <S.TitleContentRight>
                        <S.TitleContentRightName>
                          {list.title}
                        </S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          {list.category} | {list.runningTime}분 | {list.rrated}
                          세이상 관람가능
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          {list.artists.map((art: any, idx: number) => {
                            if (idx === 0) {
                              return <span key={idx}>아티스트 : {art}, </span>;
                            } else if (idx + 1 === list.artists.length) {
                              return <span key={idx}>{art}</span>;
                            } else {
                              return <span key={idx}>{art}, </span>;
                            }
                          })}
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>

                    <S.TitleContent>
                      {moment(list.releaseStartTime).format('YYYY-MM-DD')}~
                      {moment(list.releaseEndTime).format('YYYY-MM-DD')}
                    </S.TitleContent>

                    <S.TitleContent>{list.place}</S.TitleContent>

                    <S.TitleContent
                      style={{ textAlign: 'center', display: 'block' }}
                    >
                      <Link to={`/performance/${list.id}`}>예매하기</Link>
                    </S.TitleContent>
                  </S.TitleContainer>
                )}
              </div>
            );
          })}

        <Pagination
          defaultCurrent={1}
          total={performancesList.data.length}
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
