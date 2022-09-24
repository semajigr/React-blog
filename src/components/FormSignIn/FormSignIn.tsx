import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { getFirebaseMessage } from "../../utils/firebaseErrors";
import {
  Auth,
  EmailInput,
  Form,
  PasswordInput,
  StyledButton,
  StyledForm,
  Error,
  SignUpLink,
  StyledTitle,
} from "./styles";

type SignInValues = {
  email: string;
  password: string;
};

const validateRules = {
  password: {
    required: "Password is required !",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "Password must be at most 20 characters",
    },
  },
  email: {
    required: "Email is required !",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
};

export const FormSignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>({ defaultValues: { email: "", password: "" } });

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
        reset();
      });
  };

  return (
    <StyledForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>Email</StyledTitle>
        <Controller
          name="email"
          control={control}
          rules={validateRules.email}
          render={({ field: { value, onChange } }) => {
            return (
              <EmailInput value={value} onChange={onChange} type="text" placeholder="Your email" />
            );
          }}
        />

        {errors.email && <Error>{errors.email.message}</Error>}
        <StyledTitle>Password</StyledTitle>
        <Controller
          name="password"
          control={control}
          rules={validateRules.password}
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

        {errors.password && <Error>{errors.password.message}</Error>}
        <Auth>
          Dont have an account?
          <SignUpLink to={ROUTE.SIGN_UP}> Sign Up</SignUpLink>
        </Auth>
        {errorMessage && <Error>{errorMessage}</Error>}
        <StyledButton type="submit">{isLoading ? "Loading" : "Sign In"}</StyledButton>
      </Form>
    </StyledForm>
  );
};
