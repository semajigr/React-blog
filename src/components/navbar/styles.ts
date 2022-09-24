import styled from "styled-components";
import { Media } from "../../ui/breakpoints";
import { Color } from "../../ui/colors";

const StyledNav = styled.nav`
  min-width: 1120px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${Color.White};

  ${Media.LG} {
    min-width: 686px;
  }

  ${Media.MD} {
    min-width: 271px;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const FavoritesItem = styled.li`
  padding-right: 32px;
`;

const SearchItem = styled.li`
  list-style: none;
  align-items: center;
  padding-right: 32px;
`;

export { StyledNav, NavList, SearchItem, FavoritesItem };
