import { useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { useTheme } from "hooks/useTheme";
import { ROUTE } from "routes";
import {
  BurgerNavItem,
  BurgerNavList,
  BurgerTheme,
  BurgerThemeItem,
  CustomLink,
  StyledBurgerNav,
} from "./styles";

export const BurgerNavbar = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <StyledBurgerNav>
      <BurgerNavList>
        <>
          {isAuth ? (
            <>
              <BurgerNavItem>
                <CustomLink to={ROUTE.FAVORITES}>FAVORITES</CustomLink>
              </BurgerNavItem>
              <BurgerNavItem>
                <CustomLink to={ROUTE.ACCOUNT}>ACCOUNT</CustomLink>
              </BurgerNavItem>
            </>
          ) : (
            <>
              <BurgerNavItem>
                <CustomLink to={ROUTE.SIGN_IN}>Sign In</CustomLink>
              </BurgerNavItem>
              <BurgerThemeItem>
                <BurgerTheme type="button" onClick={toggleTheme}>
                  {theme === "dark" ? "Light Theme" : "Dark Theme"}
                </BurgerTheme>
              </BurgerThemeItem>
            </>
          )}
        </>
      </BurgerNavList>
    </StyledBurgerNav>
  );
};
