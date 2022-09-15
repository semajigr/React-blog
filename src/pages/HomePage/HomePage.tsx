import React, { useState } from "react";
import { Main } from "../../components";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { BlogList } from "../../components/BlogList/BlogList";
import { Tabbar } from "../../components/Tabbar/Tabbar";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Main />
    </StyledHomePage>
  );
};
