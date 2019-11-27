import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { GlobalStyle } from "./styled";
import * as serviceWorker from "./serviceWorker";
import store from "./reducer/store";

console.log("Store: ", store);
ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle whiteColor />
      <App />
    </Provider>
    ,
  </>,
  document.getElementById("root")
);
serviceWorker.unregister();
