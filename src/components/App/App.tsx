/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Navigation, Primary, Secondary } from "../Navigation";
import LogoutButton from "../LogoutButton/LogoutButton";
import { appStyles, mainStyles, navigationStyles } from "./styles";

const App: React.FC<{}> = () => {
  return (
    <div id="app" css={appStyles}>
      <Navigation css={navigationStyles}>
        <Primary>
          <a href="/1">First</a>
          <a href="/2">Second</a>
          <a href="/3">Third</a>
          <a href="/4">Fourth</a>
        </Primary>
        <Secondary>
          <LogoutButton url="/logout" />
        </Secondary>
      </Navigation>
      <main css={mainStyles}>main content area</main>
    </div>
  );
};

export default App;
