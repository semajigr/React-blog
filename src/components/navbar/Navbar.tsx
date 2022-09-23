import { StyledNav, NavList, SearchItem, StyledSignIn, FavoritesItem } from "../Navbar/styles";
import { CustomLink } from "..";
import { FavoritesIcon, LogoIcon, SearchIcon, SignInIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";

export const Navbar = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return (
    <StyledNav>
      <CustomLink to={ROUTE.HOME}>
        <LogoIcon />
      </CustomLink>
      <NavList>
        <FavoritesItem>
          <CustomLink to={ROUTE.FAVORITES}>
            <FavoritesIcon />
          </CustomLink>
        </FavoritesItem>
        <SearchItem>
          <CustomLink to={ROUTE.SEARCH}>
            <SearchIcon />
          </CustomLink>
        </SearchItem>
        {isAuth ? (
          <SearchItem>
            <CustomLink to={ROUTE.ACCOUNT}>ACCOUNT</CustomLink>
          </SearchItem>
        ) : (
          <SearchItem>
            <CustomLink to={ROUTE.SIGN_IN}>
              <SignInIcon />
              <StyledSignIn>Sign In</StyledSignIn>
            </CustomLink>
          </SearchItem>
        )}
      </NavList>
    </StyledNav>
  );
};
