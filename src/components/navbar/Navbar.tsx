import {
  StyledNav,
  NavList,
  SearchItem,
  FavoritesItem,
  SignInItem,
  AccountItem,
  AccountName,
} from "../Navbar/styles";
import { FavoritesIcon, LogoIcon, SearchIcon, SignInIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);

  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      <NavList>
        <SearchItem>
          <Link to={ROUTE.SEARCH}>
            <SearchIcon />
          </Link>
        </SearchItem>
        {isAuth ? (
          <>
            <FavoritesItem>
              <Link to={ROUTE.FAVORITES}>
                <FavoritesIcon />
              </Link>
            </FavoritesItem>
            <AccountItem>
              <Link to={ROUTE.ACCOUNT}>
                <SignInIcon />
                <AccountName>{name}</AccountName>
              </Link>
            </AccountItem>
          </>
        ) : (
          <SignInItem>
            <Link to={ROUTE.SIGN_IN}>
              <SignInIcon />
              <AccountName>Sign In</AccountName>
            </Link>
          </SignInItem>
        )}
      </NavList>
    </StyledNav>
  );
};
