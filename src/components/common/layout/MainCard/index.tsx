import React from 'react';
import styled from 'styled-components';
import palette from '../../../../lib/style/palette';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

interface CardContent {
  title: string;
  place: string;
  artist: Array<string>;
}
interface CardList {
  list: CardContent[];
}

const CardList: CardList = {
  list: [
    {
      title: 'Cats',
      place: '대학로 유니플렉스 2관',
      artist: [
        '박시원',
        '원종환',
        '유성재',
        '강정우',
        '주민진',
        '유제윤',
        '김지은',
        '홍승만',
        '정대헌',
      ],
    },
    {
      title: 'Cats',
      place: '대학로 유니플렉스 2관',
      artist: ['아티스트'],
    },
    {
      title: 'Cats',
      place: '대학로 유니플렉스 2관',
      artist: ['아티스트'],
    },
    {
      title: 'Cats',
      place: '대학로 유니플렉스 2관',
      artist: ['아티스트'],
    },
    {
      title: 'Cats',
      place: '대학로 유니플렉스 2관',
      artist: ['박시원', '원종환'],
    },
  ],
};
const index = ({ types }: { types: string }) => {
  return (
    <>
      <CardLayout>
        <ShowLayout>
          <ShowTitle>{types}</ShowTitle>

          <ShowMore>더보기</ShowMore>
        </ShowLayout>
        <div style={{ clear: 'both', display: 'flex' }}>
          {CardList.list.map((list, key) => {
            if (key === 4) {
              return (
                <Link to={`/performance/${key}`}>
                  <OverCard
                    style={{ width: 230, marginRight: 0 }}
                    cover={
                      <img
                        alt="example"
                        src="https://source.unsplash.com/random"
                        width={230}
                        height={230}
                      />
                    }
                  >
                    <p>공연명 : {list.title}</p>
                    <p>장소명 : {list.place}</p>
                    {list.artist.map((art, idx) => {
                      if (idx === 0) {
                        return <span>아티스트 : {art}, </span>;
                      } else if (idx + 1 === list.artist.length) {
                        return <span>{art}</span>;
                      } else {
                        return <span>{art}, </span>;
                      }
                    })}
                  </OverCard>
                </Link>
              );
            } else {
              return (
                <Link to={`/performance/${key}`}>
                  <OverCard
                    style={{ width: 230 }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        width={230}
                        height={230}
                      />
                    }
                  >
                    <p>공연명 : {list.title}</p>
                    <p>장소명 : {list.place}</p>
                    {list.artist.map((art, idx) => {
                      if (idx === 0) {
                        return <span>아티스트 : {art}, </span>;
                      } else if (idx + 1 === list.artist.length) {
                        return <span>{art}</span>;
                      } else {
                        return <span>{art}, </span>;
                      }
                    })}
                  </OverCard>
                </Link>
              );
            }
          })}
        </div>
      </CardLayout>
    </>
  );
};

const CardLayout = styled.div``;

const ShowLayout = styled.div`
  height: 32px;
  margin: 20px 0;
  padding-top: 10px;
  border-top: 1px solid;
`;
const ShowTitle = styled.div`
  float: left;
  font-size: 1rem;
  font-weight: bold;
`;
const ShowMore = styled.div`
  float: right;
  cursor: pointer;
  color: ${palette.blue5};
`;
const OverCard = styled(Card)`
  text-align: left;
  margin-right: 20px;
  .ant-card-body {
    padding: 12px;
  }
`;
export default index;
