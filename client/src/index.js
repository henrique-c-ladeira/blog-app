import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Routes from './routes';
import store from './store';
import appTheme from './utils/styles/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
