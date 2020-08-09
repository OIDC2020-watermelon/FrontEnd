import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Pagination, Select } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
const Artist = ({ ArtistList }: { ArtistList: any }) => {
  const [arraySlice, setArraySlice] = useState<number>(0);
  const [artistList, setArtistList] = useState<any>({
    data: [],
    error: null,
    issues: null,
  });

  const paginationButton = (e: any) => {
    console.log(e);
    let pageNum = e - 1;
    setArraySlice(4 * pageNum);
  };

  useEffect(() => {
    console.log('changes');
    setArtistList(ArtistList);
  }, [ArtistList]);

  return (
    <>
      <S.ContentLayout>
        {artistList.data.slice(arraySlice, arraySlice + 4).length === 0 ? (
          <S.TitleContainer style={{ padding: 20, borderBottom: '1px solid' }}>
            <S.TitleContentName style={{ flex: 3, textAlign: 'left' }}>
              아티스트 정보 (총{artistList.data.length}건)
            </S.TitleContentName>

            <S.TitleContentName style={{ textAlign: 'center', marginRight: 3 }}>
              상세보기
            </S.TitleContentName>
          </S.TitleContainer>
        ) : (
          <S.TitleContainer style={{ padding: 20 }}>
            <S.TitleContentName style={{ flex: 3, textAlign: 'left' }}>
              아티스트 정보 (총{artistList.data.length}건)
            </S.TitleContentName>

            <S.TitleContentName style={{ textAlign: 'center', marginRight: 3 }}>
              상세보기
            </S.TitleContentName>
          </S.TitleContainer>
        )}

        {artistList.data
          .slice(arraySlice, arraySlice + 4)
          .map((list: any, key: number) => {
            return (
              <div key={key}>
                {key ===
                artistList.data.slice(arraySlice, arraySlice + 4).length - 1 ? (
                  <S.TitleContainer style={{ borderBottom: '1px solid' }}>
                    <S.TitleContent style={{ flex: 3, textAlign: 'left' }}>
                      <S.TitleContentLeft>
                        <img
                          alt="example"
                          src={list.thumbnailImgUrl}
                          width={100}
                          height={100}
                        />
                      </S.TitleContentLeft>

                      <S.TitleContentRight>
                        <S.TitleContentRightName>이름</S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          데뷔년도
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          최근 출연작
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>

                    <S.TitleContent style={{ flex: 6, textAlign: 'left' }}>
                      <S.TitleContentRight>
                        <S.TitleContentRightName>
                          {list.name} ({list.occupation})
                        </S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          {moment(list.debutDate).format('YYYY-MM-DD')}
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          {list.products.map((value: any, idx: number) => {
                            if (list.products.length === 1) {
                              return <span key={idx}>{value} </span>;
                            } else if (idx === 0) {
                              return <span key={idx}>{value}, </span>;
                            } else if (idx + 1 === list.products.length) {
                              return <span key={idx}>{value}</span>;
                            } else {
                              return <span key={idx}>{value}, </span>;
                            }
                          })}
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>

                    <S.TitleContent
                      style={{ textAlign: 'center', display: 'block', flex: 3 }}
                    >
                      <Link to={`/place/${list.id}`}>상세보기</Link>
                    </S.TitleContent>
                  </S.TitleContainer>
                ) : (
                  <S.TitleContainer key={key}>
                    <S.TitleContent style={{ flex: 3, textAlign: 'left' }}>
                      <S.TitleContentLeft>
                        <img
                          alt="example"
                          src={list.thumbnailImgUrl}
                          width={100}
                          height={100}
                        />
                      </S.TitleContentLeft>

                      <S.TitleContentRight>
                        <S.TitleContentRightName>이름</S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          데뷔년도
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          최근출연작
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>

                    <S.TitleContent style={{ flex: 6, textAlign: 'left' }}>
                      <S.TitleContentRight>
                        <S.TitleContentRightName>
                          {list.name} ({list.occupation})
                        </S.TitleContentRightName>

                        <S.TitleContentRightDesc>
                          {moment(list.debutDate).format('YYYY-MM-DD')}
                        </S.TitleContentRightDesc>

                        <S.TitleContentRightDesc>
                          {list.products.map((value: any, idx: number) => {
                            if (list.products.length === 1) {
                              return <span key={idx}>{value} </span>;
                            } else if (idx === 0) {
                              return <span key={idx}>{value}, </span>;
                            } else if (idx + 1 === list.products.length) {
                              return <span key={idx}>{value}</span>;
                            } else {
                              return <span key={idx}>{value}, </span>;
                            }
                          })}
                        </S.TitleContentRightDesc>
                      </S.TitleContentRight>
                    </S.TitleContent>
                    <S.TitleContent
                      style={{ textAlign: 'center', display: 'block', flex: 3 }}
                    >
                      <Link to={`/place/${list.id}`}>상세보기</Link>
                    </S.TitleContent>
                  </S.TitleContainer>
                )}
              </div>
            );
          })}

        <Pagination
          defaultCurrent={1}
          total={artistList.data.length}
          style={{ textAlign: 'center', marginTop: 30 }}
          pageSize={4}
          onChange={paginationButton}
        />
      </S.ContentLayout>
    </>
  );
};

export default Artist;

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
