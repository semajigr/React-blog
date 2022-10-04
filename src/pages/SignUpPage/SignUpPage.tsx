import { FormSignUp, Modal } from "components";
import { useState } from "react";
import { ROUTE } from "routes";
import { BackToHome, StyledSignUp, Title } from "./styles";

export const SignUpPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <StyledSignUp>
      <BackToHome to={ROUTE.HOME}>Back to home</BackToHome>
      <Title>Sign Up</Title>
      <FormSignUp toggleModal={toggleModal} />
      {isOpen && <Modal toggleModal={toggleModal} />}
    </StyledSignUp>
  );
};
