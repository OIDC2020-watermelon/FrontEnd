import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainPage from './pages';
import NotFoundPage from './pages/NotFoundPage';
import AppLayout from './containers/common/AppLayout';
import 'antd/dist/antd.css';
import PerformancePage from './pages/PerformancePage';

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
      </Helmet>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/performance/:id?" component={PerformancePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
