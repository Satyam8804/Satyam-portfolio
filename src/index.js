import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery'

import 'kursor/dist/kursor.css' 
import 'swiper/swiper-bundle.min.css'
const kursor = require('kursor');
=======
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/jquery/dist/jquery'
import kursor from '../node_modules/kursor/dist/kursor'
import '../node_modules/kursor/dist/kursor.css' 

import '../node_modules/swiper/swiper-bundle.min.css'
>>>>>>> 878b53a5c8804aec86e6c5895ea233e0000a6403

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
