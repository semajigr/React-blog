import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledForm = styled.div`
  background-color: ${Color.White};
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 150px;
  padding: 30px;
  width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: ${Color.Secondary};
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
`;

const EmailInput = styled.input`
  border: 1px solid ${Color.Light};
  border-radius: 2px;
  color: ${Color.Medium};
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 40px;
  padding: 18px;
`;

const PasswordInput = styled.input`
  border: 1px solid ${Color.Light};
  border-radius: 2px;
  color: ${Color.Medium};
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 50px;
  padding: 18px;
`;

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
  padding: 16px 240px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  cursor: pointer;

  :active,
  :hover {
    background-color: ${Color.Primary_Light};
  }
`;

const Auth = styled.p`
  color: ${Color.Light};
  font-size: 16px;
  line-height: 20px;
`;

const Error = styled.p`
  color: ${Color.Error};
  margin-bottom: 20px;
`;

export { StyledForm, Form, StyledLabel, EmailInput, PasswordInput, StyledButton, Auth, Error };
