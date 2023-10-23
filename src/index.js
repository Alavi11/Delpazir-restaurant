import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import Reduser from "./Resuser";
import { Provider } from 'react-redux';
import {createStore} from "redux";
import { BrowserRouter } from 'react-router-dom';
import {AppProvider}  from "./Context"

const store = createStore(Reduser);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <AppProvider>
            <App />
          </AppProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
