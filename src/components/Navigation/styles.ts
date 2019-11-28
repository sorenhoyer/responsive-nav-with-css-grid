/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const navigationStyles = css`
  display: grid;
  grid-auto-columns: max-content;
  justify-content: center;
  background-color: blue;

  @media (min-width: 920px) {
    grid-auto-columns: unset;
    grid-template-rows: auto max-content;
    grid-template-columns: 1fr;
    grid-template-areas: "primary" "secondary";
  }
`;

const primaryStyles = css`
  grid-row: 1;
  background-color: green;

  @media (min-width: 920px) {
    grid-row: unset;
    grid-area: primary;
    display: grid;
    grid-auto-rows: max-content;
    justify-items: center;
    text-align: center;
  }
`;

const secondaryStyles = css`
  grid-row: 1;
  background-color: yellow;

  @media (min-width: 920px) {
    grid-row: unset;
    grid-area: secondary;
    display: grid;
    justify-items: center;
    text-align: center;
  }
`;

export { navigationStyles, primaryStyles, secondaryStyles };
