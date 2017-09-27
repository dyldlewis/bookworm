import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { AppContainer } from "react-hot-loader";

import App from "./components/App";


  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById("react-app-root")
  );
