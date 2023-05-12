import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-him438.us.auth0.com"
  clientId="o68wb93e73LOw38xh7bHlTxZLC6WFiES"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';

// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";

// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </React.StrictMode>
// );

