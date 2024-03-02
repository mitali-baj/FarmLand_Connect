import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import store,{Persistor} from './store';
import { Provider } from 'react-redux';
Amplify.configure(amplifyconfig);
// src/index.js


//let persistor = persistStore(store);



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor = {Persistor}>
  <React.StrictMode>
    {/* <Auth0Provider
     domain="dev-unwib2uznmp1ymj4.us.auth0.com"
     clientId="nxnI7UmTSQ0f8V5ZuoFxMwdot43ryb45"
     authorizationParams={{
      redirect_uri: "http://localhost:5173/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
     
  
      
      
      
    </Auth0Provider> */}
    <App />
  </React.StrictMode>
  </PersistGate>
  </Provider>
);
