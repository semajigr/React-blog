import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomLink } from "..";
import { ROUTE } from "../../routes";
import { getFirebaseMessage } from "../../utils/firebaseErrors";
import {
  Auth,
  EmailInput,
  Form,
  PasswordInput,
  StyledButton,
  StyledForm,
  StyledLabel,
  Error,
} from "./styles";

type SignInValues = {
  email: string;
  password: string;
};

export const FormSignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignInValues>();

  const onSubmit: SubmitHandler<SignInValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(getFirebaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
      });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Form>
        <StyledLabel>
          Email:
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <EmailInput
                  value={value}
                  onChange={onChange}
                  type="text"
                  placeholder="Your email"
                />
              );
            }}
          />
        </StyledLabel>
        {errors.email && <Error>{errors.email.message}</Error>}
        <StyledLabel>
          Password:
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <PasswordInput
                  value={value}
                  onChange={onChange}
                  type="password"
                  placeholder="Your password"
                />
              );
            }}
          />
        </StyledLabel>
        {errors.password && <Error>{errors.password.message}</Error>}
        <Auth>
          Dont have an account?
          <CustomLink to={ROUTE.SIGN_UP}> Sign Up</CustomLink>
        </Auth>
        {errorMessage && <Error>{errorMessage}</Error>}
        <StyledButton type="submit">{isLoading ? "Loading" : "Sign In"}</StyledButton>
      </Form>
    </StyledForm>
  );
};
