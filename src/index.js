import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import store from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Context} from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Context>
                  <App />
              </Context>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>

);
