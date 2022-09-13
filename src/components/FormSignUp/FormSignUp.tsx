import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { getFirebaseMessage } from "../../utils/firebaseErrors";
import { CustomLink } from "../CustomLink/CustomLink";
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

type SignUpValues = {
  email: string;
  password: string;
};

export const FormSignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>();

  const onSubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
          <EmailInput
            type="text"
            placeholder="Your email"
            {...register("email", { required: "Email is required" })}
          />
        </StyledLabel>
        {errors.email && <Error>{errors.email.message}</Error>}
        <StyledLabel>
          Password:
          <PasswordInput
            type="password"
            placeholder="Your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password min 6 symbol",
              },
            })}
          />
        </StyledLabel>
        {errors.password && <Error>{errors.password.message}</Error>}
        <Auth>
          Already have an account?
          <CustomLink to={ROUTE.SIGN_IN}> Sign In</CustomLink>
        </Auth>
        {errorMessage && <Error>{errorMessage}</Error>}
        <StyledButton type="submit">
          {isLoading ? "Loading" : "Sign Up"}
        </StyledButton>
      </Form>
    </StyledForm>
  );
};
