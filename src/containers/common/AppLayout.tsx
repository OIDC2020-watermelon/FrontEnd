import React, { ReactNode, useEffect } from 'react';
import AppHeader from '../../components/common/layout/AppHeader';
import AppFooter from '../../components/common/layout/AppFooter';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../models/saga/reducers/auth';
import WithAuth from '../../models/hook/providers/WithAuth';

interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getCurrentUser.request({}));
  },[dispatch])
  
  return (
    <>
    {/* 로그아웃, 로그인에 관한 Higher order component */}
      <WithAuth>
        <section>
          <AppHeader />
          <article>
            {children}
          </article>
          <AppFooter />
        </section>
      </WithAuth>
    </>
  );
};

export default AppLayout;
