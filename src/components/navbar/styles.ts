import { type } from "os";
import styled from "styled-components";

const StyledNav = styled.nav`
  max-height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledInput = styled.input`
  border: 0;
  background: transparent;
  width: 50%;
  min-height: 50px;
`;

const StyledSignIn = styled.a``;

export { StyledNav, StyledInput, StyledSignIn };
