import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { Moment } from 'moment';

// Pagination 5개씩 보여주고, 1~5, 6~10, 11~15 처리
interface Booking {
  img: HTMLImageElement | string;
  title: string;
  info: string;
  artist: Array<string>;
  Date: Moment | string;
  place: string;
}

interface BookingList {
  list: Booking[];
}

const DummyData: BookingList = {
  list: [
    {
      img: 'hi',
      title: '콘서트 <모짜르트> 10주년 기념공연',
      info: '콘서트 | 175분 | 8세이상 관람가능',
      artist: [
        '김준수',
        '박강현',
        '박은태',
        '김소향',
        '김연지',
        '해나',
        '민영기',
        '손준호',
      ],
      Date: 'YYYY-MM-DD~YYYY-MM-DD',
      place: '세종문화회관',
    },
    {
      img: 'hi',
      title: '콘서트 <모짜르트> 10주년 기념공연',
      info: '콘서트 | 175분 | 8세이상 관람가능',
      artist: [
        '김준수',
        '박강현',
        '박은태',
        '김소향',
        '김연지',
        '해나',
        '민영기',
        '손준호',
      ],
      Date: 'YYYY-MM-DD',
      place: '세종문화회관',
    },
    {
      img: 'hi',
      title: '콘서트 <모짜르트> 10주년 기념공연',
      info: '콘서트 | 175분 | 8세이상 관람가능',
      artist: [
        '김준수',
        '박강현',
        '박은태',
        '김소향',
        '김연지',
        '해나',
        '민영기',
        '손준호',
      ],
      Date: 'YYYY-MM-DD',
      place: '세종문화회관',
    },
  ],
};
const Title = () => {
  return (
    <>
      <S.ContentLayout>
        <S.TitleContainer style={{ padding: 20 }}>
          <S.TitleContentName style={{ flex: 4, textAlign: 'left' }}>
            상품기본정보(총10건)
          </S.TitleContentName>

          <S.TitleContentName>일시</S.TitleContentName>

          <S.TitleContentName>장소</S.TitleContentName>

          <S.TitleContentName style={{ textAlign: 'center' }}>
            예매
          </S.TitleContentName>
        </S.TitleContainer>

        {DummyData.list.map((list, key) => {
          return (
            <>
              {key === DummyData.list.length - 1 ? (
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
                        {list.info}
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

                  <S.TitleContent style={{ textAlign: 'center' }}>
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
                        {list.info}
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

                  <S.TitleContent style={{ textAlign: 'center' }}>
                    예매하기
                  </S.TitleContent>
                </S.TitleContainer>
              )}
            </>
          );
        })}

        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ textAlign: 'center', marginTop: 30 }}
        />
      </S.ContentLayout>
    </>
  );
};

export default Title;

const S: any = {};

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
