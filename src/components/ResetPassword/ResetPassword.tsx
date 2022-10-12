import { resetPassword } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { Input, Spinner } from "components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { Auth, Button, SignUp, Error, StyledResetPassword, Title } from "./styles";

type SignInValues = {
  userEmail: string;
};

const validateRules = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
};

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const ResetPassword = ({ toggleModal }: IProps) => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>({ defaultValues: { userEmail: "" } });

  const onSubmit: SubmitHandler<SignInValues> = (userEmail) => {
    dispatch(resetPassword(userEmail))
      .then(() => {
        toggleModal(true);
        navigate("/");
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledResetPassword onSubmit={handleSubmit(onSubmit)}>
      <Title>Email</Title>
      <Controller
        control={control}
        name="userEmail"
        rules={validateRules.email}
        render={({ field: { onChange, value } }) => (
          <Input onChange={onChange} value={value} placeholder="Your email" type="text" />
        )}
      />
      {errors.userEmail && <Error>{errors.userEmail.message}</Error>}

      <Button type="submit">{isPendingAuth ? <Spinner /> : "Reset Password"}</Button>

      <Auth>
        Don't have an account? <SignUp to={`/${ROUTE.SIGN_UP}`}>Sign Up</SignUp>
      </Auth>
      {error && <Error>{error}</Error>}
    </StyledResetPassword>
  );
};
