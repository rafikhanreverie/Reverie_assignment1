import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.js';

import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
  <React.StrictMode>
  <GoogleOAuthProvider clientId="31203957216-8pj6hq9en7fi2jfv9idfoec3njmp01l4.apps.googleusercontent.com">
   <App />
   </GoogleOAuthProvider>
   </React.StrictMode>
   </ChakraProvider>
  
   
  
);


