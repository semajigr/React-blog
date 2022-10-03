import styled from "styled-components";
import { Media } from "../../ui/intex";
import { Color } from "../../ui/colors";

const StyledNav = styled.nav`
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
  justify-content: end;
  align-items: center;
  width: 300px;
`;

const FavoritesItem = styled.li`
  padding-right: 32px;
`;

const SearchItem = styled.li`
  list-style: none;
  align-items: center;
  margin-right: 50px;
`;

const SignInItem = styled.li``;

const AccountItem = styled.li``;

const AccountName = styled.div`
  float: right;
  padding: 16px 10px;
`;

export { StyledNav, NavList, SearchItem, FavoritesItem, SignInItem, AccountItem, AccountName };
