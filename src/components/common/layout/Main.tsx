import React from 'react';
import styled from 'styled-components';
import MainCategory from './MainCategory';
import MainCard from './MainCard';
import { Carousel } from 'antd';
import { useTheme } from '../../../models/hook/providers/theme/ThemeProvider';
const Main = () => {
  const [{ data }] = useTheme();

  console.log('data ; ', data?.hotIssue);
  console.log('data ; ', data?.news);
  console.log('data ; ', data?.commingSoon);
  return (
    <>
      <MainLayout>
        <OverCarousel>
          <CarouselImg />
          <CarouselImg />
          <CarouselImg />
          <CarouselImg />
          <CarouselImg />
        </OverCarousel>

        <MainCategory />

        <MainCard types={'핫이슈 공연'} />
        <MainCard types={'신규 공연'} />
        <MainCard types={'comming soon'} />
      </MainLayout>
    </>
  );
};

const MainLayout = styled.div`
  text-align: center;
  margin-top: 15px;
  max-width: 1130px;
  margin: 0 auto;
`;

const OverCarousel = styled(Carousel)`
  text-align: center;
  height: 300px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  width: 65%;
  margin: 0 auto;
`;

const CarouselImg = styled.div`
  height: 24rem;
  width: 25rem;
  border-radius: 5px;
  background: url(https://source.unsplash.com/random);
  background-position: 50% 50%;
  background-size: cover;
`;

export default Main;
