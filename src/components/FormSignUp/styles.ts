import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 150px;
  background-color: ${Color.White};
  border-radius: 20px;
`;

const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: ${Color.Secondary};
`;

const StyledButton = styled.button`
  padding: 16px 240px;
  margin-top: 30px;
  font-size: 16px;
  line-height: 24px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  cursor: pointer;

  :active,
  :hover {
    background-color: ${Color.Primary_Light};
  }
`;

const Auth = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Light};
`;

const SignInLink = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Primary};
`;

const Error = styled.p`
  margin-bottom: 20px;
  color: ${Color.Error};
`;

export { StyledForm, StyledTitle, StyledButton, Auth, Error, SignInLink };
