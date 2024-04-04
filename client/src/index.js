import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { UserSignup } from './components/signup/signup';
import { UserLogin } from './components/login/login';
import { Ex } from './components/ex/ex';
import { Navbar } from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
