import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom"
import { AppContainer } from "react-hot-loader";

import App from "./components/App";


  ReactDOM.render(
    <HashRouter>
      <App/>
    </HashRouter>,
    document.getElementById("react-app-root")
  );
