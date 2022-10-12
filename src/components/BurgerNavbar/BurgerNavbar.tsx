import { useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { ROUTE } from "routes";
import { BurgerNavItem, BurgerNavList, CustomLink, StyledBurgerNav } from "./styles";

export const BurgerNavbar = () => {
  const { isAuth } = useAppSelector(getUserInfo);

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
            </>
          )}
        </>
      </BurgerNavList>
    </StyledBurgerNav>
  );
};
