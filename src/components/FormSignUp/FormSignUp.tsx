import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { fetchSignUpUser } from "../../app/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";
import { ROUTE } from "../../routes";
import {
  Auth,
  EmailInput,
  PasswordInput,
  StyledButton,
  StyledForm,
  Error,
  SignInLink,
  StyledTitle,
} from "./styles";

type SignUpValues = {
  email: string;
  password: string;
};

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const FormSignUp = ({ toggleModal }: IProps) => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>({ defaultValues: { email: "", password: "" } });

  const onSubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    dispatch(fetchSignUpUser(userInfo))
      .then(() => {
        toggleModal(true);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>Email</StyledTitle>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required!",
          pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Please enter a valid email",
          },
        }}
        render={({ field: { onChange, value } }) => {
          return (
            <EmailInput type="text" onChange={onChange} value={value} placeholder="Your email" />
          );
        }}
      />

      {errors.email && <Error>{errors.email.message}</Error>}

      <StyledTitle>Password</StyledTitle>
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be more than 6 characters",
          },
          maxLength: {
            value: 20,
            message: "Password must be less than 20 characters",
          },
        }}
        render={({ field: { value, onChange } }) => {
          return (
            <PasswordInput
              onChange={onChange}
              type="password"
              placeholder="Your password"
              value={value}
            />
          );
        }}
      />
      {errors.password && <Error>{errors.password.message}</Error>}
      <Auth>
        Already have an account?
        <SignInLink to={ROUTE.SIGN_IN}> Sign In</SignInLink>
      </Auth>

      <StyledButton type="submit">Sign Up {isPendingAuth && "Loading"}</StyledButton>
    </StyledForm>
  );
};
