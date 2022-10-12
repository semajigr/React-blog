import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/intex";

const StyledResetPasswordPage = styled.div`
  min-height: 100vh;
  margin-top: 140px;
`;

const Home = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};

  :hover {
    color: ${Color.PrimaryLight};
  }
`;

const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 72px;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};

  ${Media.LG} {
    margin-bottom: 56px;
  }

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }
`;

export { StyledResetPasswordPage, Home, Title };
