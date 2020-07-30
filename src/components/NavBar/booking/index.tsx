import React, { useState } from 'react';
import BookingHeader from './BookingHeader';

import { Moment } from 'moment';

export interface Booking {
  img: HTMLImageElement | string;
  title: string;
  type: string;
  time: string;
  age: string;
  artist: Array<string>;
  Date: Moment | string;
  place: string;
}

export interface BookingList {
  list: Booking[];
}

const Index = () => {
  const [DummyData] = useState<BookingList>({
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

  return (
    <>
      <BookingHeader BookingList={DummyData} />
    </>
  );
};

export default Index;
