import React from "react";
import {
  ArticleContent,
  ArticleDate,
  ArticleImage,
  ArticleTitle,
  StyledArticleItem,
} from "./styles";

interface IProps {
  imageUrl: any;
  title: string;
  publishedAt: string;
}

export const ArticleItem = ({ imageUrl, title, publishedAt }: IProps) => {
  return (
    <StyledArticleItem>
      <ArticleImage src={imageUrl} />
      <ArticleContent>
        <ArticleDate>{publishedAt}</ArticleDate>
        <ArticleTitle>{title}</ArticleTitle>
      </ArticleContent>
    </StyledArticleItem>
  );
};
