import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById("react-app-root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
