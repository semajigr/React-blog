import { StyledNav, NavList, SearchItem, StyledSignIn } from "../Navbar/styles";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as SignInIcon } from "../../assets/signin.svg";
import { ROUTE } from "../../routes";
import { CustomLink } from "../CustomLink/CustomLink";

export const Navbar = () => {
  return (
    <StyledNav>
      <CustomLink to={ROUTE.HOME}>
        <LogoIcon />
      </CustomLink>
      <NavList>
        <SearchItem>
          <CustomLink to={ROUTE.SEARCH}>
            <SearchIcon />
          </CustomLink>
        </SearchItem>

        <SearchItem>
          <CustomLink to={ROUTE.SIGN_IN}>
            <SignInIcon />
            <StyledSignIn>Sign In</StyledSignIn>
          </CustomLink>
        </SearchItem>
      </NavList>
    </StyledNav>
  );
};
