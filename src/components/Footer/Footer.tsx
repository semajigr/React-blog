import React from "react";
import { FooterCopyRight, FooterToggle, StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterCopyRight>©2022 Blogolog</FooterCopyRight>
      <FooterToggle>Dark theme</FooterToggle>
    </StyledFooter>
  );
};
