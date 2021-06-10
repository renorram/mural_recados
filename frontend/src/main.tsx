import React from "react";
import ReactDOM from "react-dom";
import "./components/app/index.css";
import { App } from "./components/app/AppEnhanced";
import { Provider } from "react-redux";
import { store } from "./mechanics/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
