
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/ProductContext';
import { FilterContextProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));

//const domain=process.env.REACT_APP_AUTH_DOMAIN;
//const clientId=process.env.REACT_APP_CLIENT_ID;


root.render(
    
    <Auth0Provider
    domain="dev-6iyoy77dvebkf2vw.us.auth0.com"
    clientId="cSvE5HpFq8JNsnDgvp8wtMTw8arqbGal"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<AppProvider>

<FilterContextProvider>
<CartProvider>
 <BrowserRouter>

 <App />
 
 </BrowserRouter>
 </CartProvider>
 </FilterContextProvider>

 </AppProvider>

 </Auth0Provider>
 
);
reportWebVitals();


