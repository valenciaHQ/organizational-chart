import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalStyle } from "./styled";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <GlobalStyle whiteColor />
    <App />
  </>,
  document.getElementById("root")
);
serviceWorker.unregister();
