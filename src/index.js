import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery'

import 'kursor/dist/kursor.css' 
import 'swiper/swiper-bundle.min.css'
const kursor = require('kursor');

new kursor({
  type: 1,
     color:"rgba(0, 251, 255,0.2)",
    }) 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
