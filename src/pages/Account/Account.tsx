import { useNavigate } from "react-router-dom";
import { fetchSignOut } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { useToggle } from "hooks/useToggle";
import { ROUTE } from "routes";
import { Container, CreationTime, Email, LogOut, Name, StyledAccount, Title } from "./styles";

export const Account = () => {
  const { email, creationTime, name } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpen, toggleOpen] = useToggle(false);

  const handleOut = () => {
    dispatch(fetchSignOut())
      .then(() => {
        navigate(ROUTE.HOME);
      })
      .finally(() => {
        toggleOpen();
      });
  };

  return (
    <StyledAccount>
      <Title>Account</Title>
      <Container>
        <Name>Name: {name}</Name>
        <Email>Email: {email}</Email>
        <CreationTime>
          Account creation time: {new Date(creationTime).toLocaleDateString()}
        </CreationTime>
        <LogOut type="button" onClick={handleOut}>
          Log out
        </LogOut>
      </Container>
    </StyledAccount>
  );
};
