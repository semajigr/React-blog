import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledSignUp = styled.div`
  margin-top: 60px;
`;

const BackToHome = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
`;

const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 72px;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};
`;

export { StyledSignUp, Title, BackToHome };
