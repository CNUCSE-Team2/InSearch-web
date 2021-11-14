import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import App from './App';

// axios.defaults.baseURL = 'http://192.168.0.42:8000';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
