import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/intex";

const StyledResetPassword = styled.form`
  display: flex;
  flex-direction: column;
  width: 624px;
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 150px;
  background-color: ${Color.White};
  border-radius: 20px;

  ${Media.LG} {
    width: 688px;
  }

  ${Media.MD} {
    width: 272px;
    padding: 24px;
    margin-bottom: 56px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: ${Color.Secondary};
`;

const Button = styled.button`
  padding: 16px 200px;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 4px;
  background-color: ${Color.Primary};
  color: ${Color.ExtraLight};
  cursor: pointer;

  :active,
  :hover {
    background-color: ${Color.PrimaryLight};
  }

  ${Media.MD} {
    padding: 16px 53px;
  }
`;

const Auth = styled.p`
  margin: 0 auto;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.SemiGray};

  ${Media.MD} {
    font-size: 14px;
  }
`;

const SignUp = styled(Link)`
  color: ${Color.Primary};
  font-size: 16px;
  line-height: 20px;

  :hover {
    color: ${Color.PrimaryLight};
  }

  ${Media.MD} {
    font-size: 14px;
  }
`;

const Error = styled.p`
  margin-bottom: 20px;
  color: ${Color.Error};
`;

export { StyledResetPassword, Title, Button, Auth, SignUp, Error };
