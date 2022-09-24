import { StyledNav, NavList, SearchItem, FavoritesItem } from "../Navbar/styles";
import { FavoritesIcon, LogoIcon, SearchIcon, SignInIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";
import { Link } from "react-router-dom";
import { Media } from "../../ui/breakpoints";

export const Navbar = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      <NavList>
        <FavoritesItem>
          <Link to={ROUTE.FAVORITES}>
            <FavoritesIcon />
          </Link>
        </FavoritesItem>
        <SearchItem>
          <Link to={ROUTE.SEARCH}>
            <SearchIcon />
          </Link>
        </SearchItem>
        {isAuth ? (
          <SearchItem>
            <Link to={ROUTE.ACCOUNT}>ACCOUNT</Link>
          </SearchItem>
        ) : (
          <SearchItem>
            <Link to={ROUTE.SIGN_IN}>
              <SignInIcon />
              Sign In
            </Link>
          </SearchItem>
        )}
      </NavList>
    </StyledNav>
  );
};
