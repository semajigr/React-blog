import { FormSignIn } from "components";
import { ROUTE } from "routes";
import { BackToHome, StyledSignIn, Title } from "./styles";

export const SignInPage = () => {
  return (
    <StyledSignIn>
      <BackToHome to={ROUTE.HOME}>Back to home</BackToHome>
      <Title>Sign In</Title>
      <FormSignIn />
    </StyledSignIn>
  );
};
