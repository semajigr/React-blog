import { StyledNav, NavList, SearchItem, StyledSignIn } from "../Navbar/styles";
import { CustomLink } from "..";
import { LogoIcon, SearchIcon, SignInIcon } from "../../assets";
import { ROUTE } from "../../routes";

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
