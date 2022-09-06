import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${Color.White};
`;

//const StyledInput = styled.input``;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const SearchItem = styled.li`
  list-style: none;
  align-items: center;
  padding-right: 32px;
`;

const StyledSignIn = styled.a`
  padding-left: 16px;
`;

export { StyledNav, NavList, SearchItem, StyledSignIn };
