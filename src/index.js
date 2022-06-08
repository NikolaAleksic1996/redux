import React from 'react'
import ReactDOM from "react-dom";
import Root from "./Root";

import App from "./components/App";

const container = document.getElementById("root");
ReactDOM.render(
  <Root>
    <App/>
  </Root>
  , container)
