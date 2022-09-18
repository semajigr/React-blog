import { useState } from "react";
import { ArticleList, BlogList, Tabbar } from "../../components";
import { StyledHomePage, Title } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState("articles");

  return (
    <StyledHomePage>
      <Title>Blog</Title>
      <Tabbar tab={tab} setTab={setTab} />
      {tab === "articles" ? <ArticleList /> : <BlogList />}
    </StyledHomePage>
  );
};
