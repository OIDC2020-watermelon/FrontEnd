import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './models/configure';
import App from './App';
import './FontAwesome';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './lib/style/GlobalStyle';
import AppLayout from './containers/common/AppLayout';

ReactDOM.render(
  <Provider store={store}>
    {/* styled-component 글로벌 속성 */}
    <GlobalStyle />
    <AppLayout>
      <App />
    </AppLayout>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
