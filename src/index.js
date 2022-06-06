import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
// import Schedule from './pages/Schedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Link to="/">홈</Link>
    <Link to="/home">메뉴1</Link>
    <Link to="/new">메뉴2</Link>
    {/* <Link to="/schedule">캘린더</Link> */}
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/home" element={<Page2 />} />
      <Route path="/new" element={<Page3 />} />
      {/* <Route path="/schedule" element={<Schedule />} /> */}
    </Routes>
  </BrowserRouter>
);