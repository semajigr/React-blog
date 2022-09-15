import React from "react";
import { ButtonTab, StyledTabbar } from "./styles";

export const Tabbar = ({ setTab }: any) => {
  return (
    <StyledTabbar>
      <ButtonTab
        onClick={() => {
          setTab("articles");
        }}
      >
        Articles
      </ButtonTab>
      <ButtonTab
        onClick={() => {
          setTab("blogs");
        }}
      >
        Blogs
      </ButtonTab>
    </StyledTabbar>
  );
};
