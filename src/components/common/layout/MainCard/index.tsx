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
      artist: ['박시원', '원종환', '유성재', '강정우', '주민진', '유제윤'],
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
  ],
};
const index = ({ types, data }: { types: string; data: any }) => {
  //console.log("data : ", types, data);

  return (
    <>
      <CardLayout>
        <ShowLayout>
          <ShowTitle>{types}</ShowTitle>

          <ShowMore>더보기</ShowMore>
        </ShowLayout>
        <CardContainer style={{}}>
          {data !== undefined ? (
            <>
              {data.data.length > 0 ? (
                <>
                  {data.data.map((list: any, key: number) => {
                    if (key === 3) {
                      return (
                        <Link key={key} to={`/performance/${key}`}>
                          <OverCard
                            style={{ marginRight: 0 }}
                            cover={
                              <img
                                alt="example"
                                src={list.thumbnailImgUrl}
                                width="100%"
                                height="170px"
                              />
                            }
                          >
                            <p>공연명 : {list.title}</p>
                            <p>장소명 : {list.place}</p>
                            {list.artists.map((art: string, idx: number) => {
                              if (idx === 0) {
                                return (
                                  <span key={idx}>아티스트 : {art}, </span>
                                );
                              } else if (idx + 1 === list.artists.length) {
                                return <span key={idx}>{art}</span>;
                              } else {
                                return <span key={idx}>{art}, </span>;
                              }
                            })}
                          </OverCard>
                        </Link>
                      );
                    } else {
                      return (
                        <Link key={key} to={`/performance/${key}`}>
                          <OverCard
                            cover={
                              <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                width="100%"
                                height="170px"
                              />
                            }
                          >
                            <p>공연명 : {list.title}</p>
                            <p>장소명 : {list.place}</p>
                            {list.artists.map((art: string, idx: number) => {
                              if (idx === 0) {
                                return (
                                  <span key={idx}>아티스트 : {art}, </span>
                                );
                              } else if (idx + 1 === list.artists.length) {
                                return <span key={idx}>{art}</span>;
                              } else {
                                return <span key={idx}>{art}, </span>;
                              }
                            })}
                          </OverCard>
                        </Link>
                      );
                    }
                  })}
                </>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
        </CardContainer>
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
  .ant-card-body {
    padding: 12px;
  }
  width: 270px;
  height: 350px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  backgroud: #fff;
  display: inline-grid;
  justify-items: center;
  align-items: center;
  /* Medium devices (landscape tablets, 0px and up) */

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 0px) {
    grid-template-columns: repeat(3, 1fr);
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export default index;
