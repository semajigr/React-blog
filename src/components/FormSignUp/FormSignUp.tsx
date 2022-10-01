import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { fetchSignUpUser } from "../../app/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";
import { ROUTE } from "../../routes";
import { Input } from "../Input/Input";
import { Spinner } from "../Spinner/Spinner";
import { Auth, StyledButton, StyledForm, Error, SignInLink, StyledTitle } from "./styles";

type SignUpValues = {
  email: string;
  password: string;
  userName: string;
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
  name: {
    required: "Name is required !",
    pattern: {
      value: /[A-Za-z]/,
      message: "Name must contain only letters",
    },
  },
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
  } = useForm<SignUpValues>({ defaultValues: { email: "", password: "", userName: "" } });

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
      <StyledTitle>Name</StyledTitle>
      <Controller
        name="userName"
        control={control}
        rules={validateRules.name}
        render={({ field: { value, onChange } }) => {
          return <Input onChange={onChange} value={value} placeholder="Your name" type="text" />;
        }}
      />

      {errors.userName && <Error>{errors.userName.message}</Error>}

      <StyledTitle>Email</StyledTitle>
      <Controller
        name="email"
        control={control}
        rules={validateRules.email}
        render={({ field: { onChange, value } }) => {
          return <Input type="text" onChange={onChange} value={value} placeholder="Your email" />;
        }}
      />

      {errors.email && <Error>{errors.email.message}</Error>}

      <StyledTitle>Password</StyledTitle>
      <Controller
        name="password"
        control={control}
        rules={validateRules.password}
        render={({ field: { onChange, value } }) => {
          return (
            <Input onChange={onChange} type="password" placeholder="Your password" value={value} />
          );
        }}
      />

      {errors.password && <Error>{errors.password.message}</Error>}

      <Auth>
        Already have an account?
        <SignInLink to={ROUTE.SIGN_IN}> Sign In</SignInLink>
      </Auth>

      {error && <Error>{error}</Error>}

      <StyledButton type="submit">Sign Up {isPendingAuth && <Spinner />}</StyledButton>
    </StyledForm>
  );
};
