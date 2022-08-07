import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ContextProver from './contexts/ContextProver';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Movie from './components/Movie';
import Search from './components/Search';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProver>
      <BrowserRouter>
        <Routes element={<App/>}>
          <Route path='/' element={<App/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='movie/:id' element={<Movie/>}/>
          <Route path='search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProver>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
