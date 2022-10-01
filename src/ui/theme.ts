import { css } from "styled-components";
import { Color } from "./colors";

export type Theme = "dark" | "light";

export const ThemeColors = css`
  html[data-theme="dark"] {
    ${Color.Gray};
    ${Color.Medium};
    ${Color.White};
    ${Color.Secondary};
  }

  html[data-theme="light"] {
    ${Color.Gray};
    ${Color.Medium};
    ${Color.White};
    ${Color.Secondary};
  }
`;
