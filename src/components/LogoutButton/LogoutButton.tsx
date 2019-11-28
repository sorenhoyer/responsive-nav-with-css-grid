/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { buttonStyles } from "./styles";

const LogoutButton: React.FC<any> = ({ url }) => {
  return (
    <a css={buttonStyles} href={url}>
      <img src="./logout.svg" alt="logout" />
    </a>
  );
};

export default LogoutButton;
