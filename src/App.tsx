import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';

import MainPage from './pages';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import AppLayout from './containers/common/AppLayout';
import PerformancePage from './pages/PerformancePage';
import ManagePage from './pages/Manage';

import Mypage from './pages/Mypage';
import Leave from './pages/Leave';

function App() {
  return (
    <>
      <Helmet>
        <title>OIDC</title>
        <meta name="description" content="OIDC 공모전 페이지입니다." />
        <meta property="fb:app_id" content="" />
        <meta property="og:image" content="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bangers&family=Bebas+Neue&family=Cedarville+Cursive&family=IBM+Plex+Sans:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/performance/:id?" component={PerformancePage} />
            <Route path="/login" component={Login} />
            <Route path="/booking" component={Mypage} />

            <Route path="/mypage" component={Mypage} />
            <Route path="/leave" component={Leave} />

            <Route path="/book_Manage" component={Mypage} />
            <Route path="/manage" component={ManagePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
