import { StyledNav, StyledInput, StyledSignIn } from "../navbar/styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Icon } from "../../assets/search.svg";
import { ReactComponent as Sign } from "../../assets/signin.svg";

export const Navbar = () => {
  return (
    <StyledNav>
      <Logo />
      <StyledInput type="text" placeholder="Search" />
      <Icon />
      <Sign />
      <StyledSignIn>Sign In</StyledSignIn>
    </StyledNav>
  );
};
