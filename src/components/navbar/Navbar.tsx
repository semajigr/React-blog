import {
  StyledNav,
  NavList,
  SearchItem,
  FavoritesItem,
  SignInItem,
  AccountItem,
  AccountName,
  SearchIcons,
  FavoriteIcon,
  BurgerItem,
  EmptyFavoriteIcon,
} from "./styles";
import { LogoIcon, MobileLogoIcon, SignInIcon } from "assets";
import { ROUTE } from "routes";
import { useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { Link } from "react-router-dom";
import { useWindowSize } from "hooks/useWindowSize";
import { Breakpoints } from "ui/intex";
import { Burger, BurgerNavbar, Close } from "components";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "hooks/useToggle";
import { getFavoriteArticle } from "app/selectors";

export const Navbar = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);
  const [width] = useWindowSize();
  const { favorites } = useAppSelector(getFavoriteArticle);

  const [isOpen, setIsOpen] = useToggle(false);

  const handleOpenBurger = (): void => {
    setIsOpen();
  };

  const handleCloseBurger = (): void => {
    setIsOpen();
  };

  return (
    <StyledNav>
      <Link to={ROUTE.HOME}>{width > Breakpoints.MD ? <LogoIcon /> : <MobileLogoIcon />}</Link>
      {width > Breakpoints.MD ? (
        <NavList>
          <SearchItem>
            <Link to={ROUTE.SEARCH}>
              <SearchIcons />
            </Link>
          </SearchItem>
          {isAuth ? (
            <>
              <FavoritesItem>
                <Link to={ROUTE.FAVORITES}>
                  {favorites.length ? <FavoriteIcon /> : <EmptyFavoriteIcon />}
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
      ) : (
        <>
          <NavList>
            <SearchItem>
              <Link to={ROUTE.SEARCH}>
                <SearchIcons />
              </Link>
            </SearchItem>
            <BurgerItem>
              {isOpen ? (
                <AnimatePresence>
                  <Close type="button" onClick={handleCloseBurger} />
                </AnimatePresence>
              ) : (
                <Burger type="button" onClick={handleOpenBurger} />
              )}
            </BurgerItem>
          </NavList>
          {isOpen && <BurgerNavbar />}
        </>
      )}
    </StyledNav>
  );
};
