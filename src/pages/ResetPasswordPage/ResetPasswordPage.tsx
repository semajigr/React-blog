import { ResetPassword } from "components";
import { useState } from "react";
import { ROUTE } from "routes";
import { Home, StyledResetPasswordPage, Title } from "./styles";

export const ResetPasswordPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <StyledResetPasswordPage>
      <Home to={ROUTE.HOME}>Back to home</Home>
      <Title>Reset Password</Title>
      <ResetPassword toggleModal={toggleModal} />
    </StyledResetPasswordPage>
  );
};
