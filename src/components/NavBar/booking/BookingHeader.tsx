import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Button, Select } from 'antd';
import { Pagination } from 'antd';
import { BookingList } from './index';

const { Option } = Select;

const Header = ({ BookingList }: { BookingList: BookingList }) => {
  const [filter, setFilter] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [arraySlice, setArraySlice] = useState<number>(0);
  const [bookingList, setBookingList] = useState<BookingList>(BookingList);

  const SelectChange = (e: any) => {
    console.log(e);
    setCategory(e);
  };

  const SearchBarChange = (e: any) => {
    setFilter(e.target.value);
  };

  const paginationButton = (e: any) => {
    console.log(e);
    let pageNum = e - 1;
    setArraySlice(4 * pageNum);
  };

  useEffect(() => {
    const filteredData = {
      list: BookingList.list.filter((item: any) => {
        return Object.keys(item).some((key: any) => item[key].includes(filter));
      }),
    };

    setBookingList(filteredData);
  }, [filter, BookingList]);

  useEffect(() => {
    const categoryData = {
      list: BookingList.list.filter((item: any) =>
        item.type.includes(category),
      ),
    };

    setBookingList(categoryData);
  }, [category, BookingList]);

  console.log(bookingList);
  return (
    <>
      <S.HeaderContainer>
        <S.SearchBar>
          <S.SearchInputContainer>
            <S.SearchBarTitle>
              <div>공연명</div>
            </S.SearchBarTitle>
            <S.SearchBarInput onChange={SearchBarChange} />
          </S.SearchInputContainer>
          <S.SearchInputContainer>
            <S.SearchBarTitle>
              <div>카테고리별</div>
            </S.SearchBarTitle>
            <S.SearchBarSelect defaultValue="콘서트" onChange={SelectChange}>
              <Option value="콘서트">콘서트</Option>
              <Option value="연극">연극</Option>
              <Option value="클래식/무용">클래식/무용</Option>
              <Option value="전시/행사">전시/행사</Option>
            </S.SearchBarSelect>
          </S.SearchInputContainer>
        </S.SearchBar>
      </S.HeaderContainer>

      <S.ContentLayout>
        {bookingList.list.slice(arraySlice, arraySlice + 4).length === 0 ? (
          <S.TitleContainer style={{ padding: 20, borderBottom: '1px solid' }}>
            <S.TitleContentName style={{ flex: 4, textAlign: 'left' }}>
              상품기본정보(총{bookingList.list.length}건)
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
              상품기본정보(총{bookingList.list.length}건)
            </S.TitleContentName>

            <S.TitleContentName>일시</S.TitleContentName>

            <S.TitleContentName>장소</S.TitleContentName>

            <S.TitleContentName style={{ textAlign: 'center' }}>
              예매
            </S.TitleContentName>
          </S.TitleContainer>
        )}

        {bookingList.list.slice(arraySlice, arraySlice + 4).map((list, key) => {
          return (
            <div key={key}>
              {key ===
              bookingList.list.slice(arraySlice, arraySlice + 4).length - 1 ? (
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
                        {list.type} | {list.time}분 | {list.age}세이상 관람가능
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
                <S.TitleContainer>
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
                        {list.type} | {list.time}분 | {list.age}세이상 관람가능
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
          total={bookingList.list.length}
          style={{ textAlign: 'center', marginTop: 30 }}
          pageSize={4}
          onChange={paginationButton}
        />
      </S.ContentLayout>
    </>
  );
};

export default Header;

const S: any = {};

S.HeaderContainer = styled.div`
  padding: 30px 40px;
  border: 1px solid;
  min-width: 570px;
  margin: 1rem 0 3rem;
`;

S.SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
S.SearchInputContainer = styled.div`
  display: flex;
`;

S.SearchBarTitle = styled.div`
  display: flex;
  height: 30px;
  margin-right: 5px;
  & > div {
    margin-right: 2rem;
    align-self: center;
  }
`;

S.SearchBarInput = styled(Input)`
  width: 25rem;
  margin-right: 3rem;
`;
S.SearchBarSelect = styled(Select)`
  width: 25rem;
`;

S.HeaderButtonLayout = styled.div`
  text-align: right;
`;

S.OverButton = styled(Button)``;

// ====================== Booking ConTent ======================
S.ContentLayout = styled.div`
  margin-top: 3%;
  min-width: 570px;
`;
S.TitleContainer = styled.div`
  padding: 15px;
  border: 1px solid;
  border-bottom: none;
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
