/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { primaryStyles } from "./styles";

const Primary: React.FC<{}> = ({ children }) => {
  return <section css={primaryStyles}>{children}</section>;
};

export default Primary;
