import styled from "styled-components";
import { Media } from "../../ui/breakpoints";
import { Color } from "../../ui/colors";

const StyledHomePage = styled.div`
  width: 1120px;
  margin-bottom: 72px;

  ${Media.LG} {
    width: 686px;
  }
  ${Media.MD} {
    width: 271px;
  }
`;

const Title = styled.h1`
  margin-top: 72px;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};
`;

export { StyledHomePage, Title };
