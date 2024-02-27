import React from 'react';
import "./style/reset.css"
import ReactDOM from 'react-dom/client';

import Navbar from './pages/Navbar/Navbar'
import Header from './pages/Header/Header'
import Stack from './pages/My-Stack/MyStack'
import Footer from './pages/Footer/Footer'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <Stack/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
