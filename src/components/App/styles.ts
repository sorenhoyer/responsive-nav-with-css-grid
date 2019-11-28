/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const appStyles = css`
  display: grid;
  grid-template-areas: "main" "header";
  grid-template-rows: auto 3rem;
  grid-template-columns: 1fr;

  @media (min-width: 920px) {
    grid-template-areas: "header main";
    grid-template-rows: 1fr;
    grid-template-columns: 3rem auto;
  }
`;

const navigationStyles = css`
  grid-area: header;
`;

const mainStyles = css`
  grid-area: main;
`;

export { appStyles, mainStyles, navigationStyles };
