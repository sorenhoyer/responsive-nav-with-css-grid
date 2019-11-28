/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { navigationStyles } from "./styles";

const Navigation: React.FC<{}> = ({ children }) => {
  return <nav css={navigationStyles}>{children}</nav>;
};

export default Navigation;
