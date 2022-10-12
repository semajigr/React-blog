import styled from "styled-components";
import { Media } from "ui/intex";
import { Color } from "ui/colors";

const StyledHomePage = styled.div`
  margin-top: 152px;
  margin-bottom: 72px;

  ${Media.LG} {
    width: 686px;
  }
  ${Media.MD} {
    width: 271px;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  line-height: 84px;
  color: ${Color.Secondary};

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }
`;

export { StyledHomePage, Title };
