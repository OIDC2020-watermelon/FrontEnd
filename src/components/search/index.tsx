import React, { useState } from 'react';
import PerformanceLayout from './performance';
import PlaceLayout from './place';
import ArtistLayout from './artist';
import { Moment } from 'moment';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface Performance {
  img: HTMLImageElement | string;
  title: string;
  type: string;
  time: string;
  age: string;
  artist: Array<string>;
  Date: Moment | string;
  place: string;
}

export interface PerformanceList {
  list: Performance[];
}

export interface Place {
  img: HTMLImageElement | string;
  name: string;
  addr: string;
  number: string;
  url: string;
}

export interface PlaceList {
  list: Place[];
}

export interface Artist {
  img: HTMLImageElement | string;
  name: string;
  year: Moment | string;
  work: Array<string>;
}

export interface ArtistList {
  list: Artist[];
}

const Index = () => {
  const [DummyData] = useState<PerformanceList>({
    list: [
      {
        img: 'hi',
        title: '콘서트 <모짜르트> 1주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '1',
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
        title: '콘서트 <모짜르트> 2주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '2',
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
        title: '콘서트 <모짜르트> 3주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '3',
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
        title: '콘서트 <모짜르트> 4주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '4',
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
        title: '콘서트 <모짜르트> 5주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '5',
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
        title: '콘서트 <모짜르트> 6주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '6',
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
        title: '콘서트 <모짜르트> 7주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '7',
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
        title: '콘서트 <모짜르트> 8주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '8',
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
        title: '콘서트 <모짜르트> 9주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '9',
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
        type: '콘서트',
        time: '175',
        age: '10',
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
        title: '콘서트 <모짜르트> 11주년 기념공연',
        type: '콘서트',
        time: '175',
        age: '11',
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
  });

  const [PlaceDummyData] = useState<PlaceList>({
    list: [
      {
        img: 'hi',
        name: '블루 스퀘어',
        addr: '서울시 용산구 이태원로 294 블루스퀘어',
        number: '1544-1591',
        url: 'www.bluesquare.com/asp',
      },
      {
        img: 'hi',
        name: '블루 스퀘어',
        addr: '서울시 용산구 이태원로 294 블루스퀘어',
        number: '1544-1591',
        url: 'www.bluesquare.com/asp',
      },
      {
        img: 'hi',
        name: '블루 스퀘어',
        addr: '서울시 용산구 이태원로 294 블루스퀘어',
        number: '1544-1591',
        url: 'www.bluesquare.com/asp',
      },
      {
        img: 'hi',
        name: '블루 스퀘어',
        addr: '서울시 용산구 이태원로 294 블루스퀘어',
        number: '1544-1591',
        url: 'www.bluesquare.com/asp',
      },
      {
        img: 'hi',
        name: '블루 스퀘어',
        addr: '서울시 용산구 이태원로 294 블루스퀘어',
        number: '1544-1591',
        url: 'www.bluesquare.com/asp',
      },
      {
        img: 'hi',
        name: '블루 스퀘어',
        addr: '서울시 용산구 이태원로 294 블루스퀘어',
        number: '1544-1591',
        url: 'www.bluesquare.com/asp',
      },
    ],
  });

  const [ArtistDummyData] = useState<ArtistList>({
    list: [
      {
        img: 'hi',
        name: '아이유',
        year: '2008',
        work: ['아이유 콘서트(2019)', '아이유 콘서트 - 부산(2019)'],
      },
      {
        img: 'hi',
        name: '아이유',
        year: '2008',
        work: ['아이유 콘서트(2019)', '아이유 콘서트 - 부산(2019)'],
      },
      {
        img: 'hi',
        name: '아이유',
        year: '2008',
        work: ['아이유 콘서트(2019)', '아이유 콘서트 - 부산(2019)'],
      },
      {
        img: 'hi',
        name: '아이유',
        year: '2008',
        work: ['아이유 콘서트(2019)', '아이유 콘서트 - 부산(2019)'],
      },
      {
        img: 'hi',
        name: '아이유',
        year: '2008',
        work: ['아이유 콘서트(2019)', '아이유 콘서트 - 부산(2019)'],
      },
      {
        img: 'hi',
        name: '아이유',
        year: '2008',
        work: ['아이유 콘서트(2019)', '아이유 콘서트 - 부산(2019)'],
      },
    ],
  });
  const urlLocation = window.location.pathname;
  let urlTypes: string;
  if (urlLocation === '/search/performance') {
    urlTypes = '1';
  } else if (urlLocation === '/search/place') {
    urlTypes = '2';
  } else {
    urlTypes = '3';
  }
  console.log(urlTypes);

  return (
    <>
      <S.StyledMenu
        defaultSelectedKeys={[urlTypes]}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="1">
          <Link to="/search/performance">공연</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/search/place">공연장</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/search/artist">아티스트</Link>
        </Menu.Item>
      </S.StyledMenu>

      {urlTypes === '1' ? (
        <PerformanceLayout PerformanceList={DummyData} />
      ) : urlTypes === '2' ? (
        <PlaceLayout PlaceList={PlaceDummyData} />
      ) : (
        <ArtistLayout ArtistList={ArtistDummyData} />
      )}
    </>
  );
};

export default Index;

const S: any = {};

S.StyledMenu = styled(Menu)`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 5px;
  border: 1px solid;
  border-color: lightgray;
`;
