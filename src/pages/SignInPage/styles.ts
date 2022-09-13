import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledSignIn = styled.div`
  margin-top: 60px;
`;

const BackToHome = styled(Link)`
  color: ${Color.Secondary};
  font-size: 16px;
  line-height: 24px;
`;

const Title = styled.h1`
  color: ${Color.Secondary};
  font-size: 56px;
  line-height: 80px;
  margin-top: 32px;
  margin-bottom: 72px;
`;

export { StyledSignIn, BackToHome, Title };
