import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import './i18n/i18n'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="555077241185-r79oaldvmmq001citu431g84i7jcup71.apps.googleusercontent.com">

    <BrowserRouter>

      <App />

    </BrowserRouter>,
  </GoogleOAuthProvider>
);



