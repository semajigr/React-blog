import styled from "styled-components";
import logo from "../src/assets/logo.svg";

const CustomNav = styled.nav`
  max-height: 100px;
`;

const CustomLink = styled.a`
  background-image: url(${logo});
`;

const CustomImg = styled.img``;

export { CustomNav, CustomLink };
