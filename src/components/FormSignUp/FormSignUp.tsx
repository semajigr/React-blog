import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomLink } from "..";
import { fetchSignInUser } from "../../app/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";
import { ROUTE } from "../../routes";
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
  name: string;
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

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const FormSignUp = ({ toggleModal }: IProps) => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignUpValues>({ defaultValues: { email: "", password: "", name: "" } });

  const onSubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo))
      .then(() => {
        toggleModal(true);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Form>
        <StyledLabel>
          Email:
          <Controller
            name="email"
            control={control}
            rules={validateRules.email}
            render={({ field: { value, onChange } }) => {
              return (
                <EmailInput
                  type="text"
                  value={value}
                  onChange={onChange}
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
            rules={validateRules.password}
            render={({ field: { value, onChange } }) => {
              return (
                <PasswordInput
                  type="password"
                  placeholder="Your password"
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
        </StyledLabel>
        {errors.password && <Error>{errors.password.message}</Error>}
        <Auth>
          Already have an account?
          <CustomLink to={ROUTE.SIGN_IN}> Sign In</CustomLink>
        </Auth>
        {error && <Error>{error}</Error>}
        <StyledButton type="submit">Sign Up {isPendingAuth && "Loading"}</StyledButton>
      </Form>
    </StyledForm>
  );
};
