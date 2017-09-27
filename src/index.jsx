import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom"
import { AppContainer } from "react-hot-loader";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import App from "./components/App";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>,
    document.getElementById("react-app-root")
  );
