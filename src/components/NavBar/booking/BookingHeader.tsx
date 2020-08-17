import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Input, Button, Select, message } from 'antd';
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { getBooking } from '../../../models/saga/reducers/booking';
import store from '../../../models/configure';

const { Option } = Select;

const Header = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('CONCERT');
  const [arraySlice, setArraySlice] = useState<number>(0);
  const [bookingList, setBookingList] = useState<any>({ data: [], error: '' });
  const [page] = useState<number>(0);
  const SelectChange = (e: any) => {
    console.log(e);
    setCategory(e);
  };

  const SearchBarChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const paginationButton = (e: any) => {
    console.log(e);
    let pageNum = e - 1;
    setArraySlice(4 * pageNum);
  };

  const searchReservation = (e: any) => {
    console.log('keyword : ', keyword);
    console.log('category : ', category);
    // API 호출
    if (keyword === '') {
      message.error('공연명을 입력해주세요!');
    } else {
      dispatch(getBooking.request({ category, keyword, page }));
    }
  };

  store.subscribe(() => {
    setBookingList(store.getState().booking.bookings);
  });

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
            <S.SearchBarSelect defaultValue="CONCERT" onChange={SelectChange}>
              <Option value="CONCERT">콘서트</Option>
              <Option value="PLAY">연극</Option>
              <Option value="CLASSIC_DANCE">클래식/무용</Option>
              <Option value="EXHIBITION_EVENT">전시/행사</Option>
            </S.SearchBarSelect>
          </S.SearchInputContainer>

          <S.SearchInputContainer>
            <S.SearchBarTitle>
              <S.OverButton onClick={searchReservation}>조회하기</S.OverButton>
            </S.SearchBarTitle>
          </S.SearchInputContainer>
        </S.SearchBar>
      </S.HeaderContainer>

      <S.ContentLayout>
        {bookingList.data.slice(arraySlice, arraySlice + 5).length === 0 ? (
          <S.TitleContainer style={{ padding: 20, borderBottom: '1px solid' }}>
            <S.TitleContentName style={{ flex: 4, textAlign: 'left' }}>
              상품기본정보(총{bookingList.data.length}건)
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
              상품기본정보(총{bookingList.data.length}건)
            </S.TitleContentName>

            <S.TitleContentName>일시</S.TitleContentName>

            <S.TitleContentName>장소</S.TitleContentName>

            <S.TitleContentName style={{ textAlign: 'center' }}>
              예매
            </S.TitleContentName>
          </S.TitleContainer>
        )}

        {bookingList.data
          .slice(arraySlice, arraySlice + 5)
          .map((list: any, key: number) => {
            return (
              <div key={key}>
                {key ===
                bookingList.data.slice(arraySlice, arraySlice + 5).length -
                  1 ? (
                  <S.TitleContainer style={{ borderBottom: '1px solid' }}>
                    <S.TitleContent style={{ flex: 4, textAlign: 'left' }}>
                      <S.TitleContentLeft>
                        <img
                          alt="example"
                          src={list.thumbnailImgUrl}
                          width={110}
                          height={110}
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

                    <S.TitleContent style={{ flexDirection: 'column' }}>
                      <div>
                        {moment(list.releaseStartTime).format('YYYY-MM-DD')}~
                      </div>
                      <div>
                        {moment(list.releaseEndTime).format('YYYY-MM-DD')}
                      </div>
                    </S.TitleContent>

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
                          src={list.thumbnailImgUrl}
                          width={110}
                          height={110}
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

                    <S.TitleContent style={{ flexDirection: 'column' }}>
                      <div>
                        {moment(list.releaseStartTime).format('YYYY-MM-DD')}~
                      </div>
                      <div>
                        {moment(list.releaseEndTime).format('YYYY-MM-DD')}
                      </div>
                    </S.TitleContent>

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
          total={bookingList.data.length}
          style={{ textAlign: 'center', marginTop: 30 }}
          pageSize={5}
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
  width: 20rem;
`;
S.SearchBarSelect = styled(Select)`
  width: 20rem;
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
  margin-top: 10px;
`;
