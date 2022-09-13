import React from "react";
import {
  ButtonArticels,
  ButtonNews,
  StyledMain,
  StyledTabs,
  Title,
} from "../Main/styles";

export const Main = () => {
  return (
    <StyledMain>
      <Title>Blog</Title>
      <StyledTabs>
        <ButtonArticels>Articles</ButtonArticels>
        <ButtonNews>News</ButtonNews>
      </StyledTabs>
    </StyledMain>
  );
};
