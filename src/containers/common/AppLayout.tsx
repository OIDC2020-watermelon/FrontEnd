import React, { ReactNode, useEffect } from 'react';
import AppHeader from '../../components/common/layout/AppHeader';
import AppFooter from '../../components/common/layout/AppFooter';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../models/saga/reducers/auth';
import WithAuth from '../../models/hook/providers/WithAuth';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser.request({}));
  }, [dispatch]);
  console.log('hi', window.location.pathname);
  if (window.location.pathname.includes('search')) {
    console.log('here');
  } else {
    console.log('hee');
  }
  return (
    <>
      {/* 로그아웃, 로그인에 관한 Higher order component */}
      <WithAuth>
        <S.StyledSection>
          <AppHeader />
          <S.StyledArticle>{children}</S.StyledArticle>
          <AppFooter />
        </S.StyledSection>
      </WithAuth>
    </>
  );
};

const S: any = {};

S.StyledSection = styled.section`
  min-width: 865px;
  max-width: 1300px;
  margin: 0 auto;
`;

S.StyledArticle = styled.article`
  padding: 2rem;
`;

export default AppLayout;
