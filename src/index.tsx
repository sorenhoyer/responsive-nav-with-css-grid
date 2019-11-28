/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";

import "./styles.css";

function Root() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          html,
          body {
            margin: 0px;
          }
          html,
          body,
          #root,
          #app {
            height: 100vh;
            width: 100vw;
          }
        `}
      />
      <App />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<Root />, rootElement);
