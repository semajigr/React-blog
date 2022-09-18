import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledForm = styled.div`
  background-color: ${Color.White};
  border-radius: 20px;
  margin: 0 auto;
  padding: 30px;
  width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
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
  background-color: ${Color.Primary};
  border: none;
  color: ${Color.White};
  font-size: 18px;
  line-height: 24px;
  margin-top: 30px;
  padding: 16px 240px;
`;

const Auth = styled.p`
  color: ${Color.Light};
  font-size: 16px;
  line-height: 20px;
`;

const Error = styled.p`
  color: ${Color.Error};
  padding-top: 5px;
`;

export { StyledForm, Form, StyledLabel, EmailInput, PasswordInput, StyledButton, Auth, Error };
