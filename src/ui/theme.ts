import { css } from "styled-components";

export const theme = css`
  html[data-theme="light"] {
    --primary: #6c1bdb;
    --primaryLight: #912ef2;
    --secondary: #313037;
    --medium: #98989b;
    --light: #ffffff;
    --extraLight: #ffffff;
    --red: #fd3419;
    --white: #ffffff;
    --gray: #f3f3f3;
    --shadow: #eaeaeb;
    --semiGray: #c1c1c3;
  }
  html[data-theme="dark"] {
    --primary: #6c1bdb;
    --primaryLight: #912ef2;
    --secondary: #ffffff;
    --medium: #98989b;
    --light: #c1c1c3;
    --extraLight: #ffffff;
    --red: #fd3419;
    --white: #4c4d4d;
    --gray: #313037;
    --shadow: #eaeaeb;
    --semiGray: #c1c1c3;
  }
`;
