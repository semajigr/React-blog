import React, { useState } from "react";
import { ArticleList } from "../ArticleList/ArticleList";
import { BlogList } from "../BlogList/BlogList";
import { StyledMain, Title } from "../Main/styles";
import { Tabbar } from "../Tabbar/Tabbar";

export const Main = () => {
  const [tab, setTab] = useState("articles");

  return (
    <StyledMain>
      <Title>Blog</Title>
      <Tabbar tab={tab} setTab={setTab} />
      {tab === "articles" ? <ArticleList /> : <BlogList />}
    </StyledMain>
  );
};
