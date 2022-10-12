import styled from "styled-components";
import { Media } from "ui/intex";
import { Color } from "ui/colors";
import { FavoritesIcon, SearchIcon } from "assets";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${Color.White};
  width: 100%;
  position: fixed;
  z-index: 15;
  margin-bottom: 80px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  max-width: 300px;
`;

const FavoritesItem = styled.li`
  padding-right: 32px;
`;

const SearchItem = styled.li`
  list-style: none;
  align-items: center;
  margin-right: 50px;

  ${Media.MD} {
    margin-right: 30px;
  }
`;

const SearchIcons = styled(SearchIcon)`
  path {
    stroke: ${Color.Secondary};
  }
`;

const FavoriteIcon = styled(FavoritesIcon)`
  path {
    stroke: ${Color.Secondary};
    fill: ${Color.Error};
  }
`;

const EmptyFavoriteIcon = styled(FavoritesIcon)`
  path {
    stroke: ${Color.Secondary};
  }
`;

const SignInItem = styled.li``;

const AccountItem = styled.li``;

const AccountName = styled.div`
  float: right;
  padding: 16px 10px;
  color: ${Color.Secondary};

  :hover {
    color: ${Color.PrimaryLight};
  }
`;

const BurgerItem = styled.li``;

export {
  StyledNav,
  NavList,
  SearchItem,
  FavoritesItem,
  SignInItem,
  AccountItem,
  BurgerItem,
  AccountName,
  SearchIcons,
  FavoriteIcon,
  EmptyFavoriteIcon,
};
