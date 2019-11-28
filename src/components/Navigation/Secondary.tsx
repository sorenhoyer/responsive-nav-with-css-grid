/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { secondaryStyles } from "./styles";

const Secondary: React.FC<{}> = ({ children }) => {
  return <section css={secondaryStyles}>{children}</section>;
};

export default Secondary;
