import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import './i18n/i18n'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    
    <App />
   
    </BrowserRouter>,
);



