import { useState } from "react";
import { FormSignUp } from "../../components";
import { Modal } from "../../components/Modal/Modal";
import { StyledSignUp, Title } from "./styles";

export const SignUpPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <StyledSignUp>
      <Title>Sign Up</Title>
      <FormSignUp toggleModal={toggleModal} />
      {isOpen && <Modal toggleModal={toggleModal} />}
    </StyledSignUp>
  );
};
