import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { MyContextProvider } from './provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
  <Route path="/about" element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
    </MyContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

