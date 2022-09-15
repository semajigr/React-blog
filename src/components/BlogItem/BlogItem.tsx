import React from "react";
import {
  BlogContent,
  BlogDate,
  BlogImage,
  BlogTitle,
  StyledBlogItem,
} from "./styles";

interface IProps {
  imageUrl: any;
  title: string;
  publishedAt: string;
}

export const BlogItem = ({ imageUrl, title, publishedAt }: IProps) => {
  return (
    <StyledBlogItem>
      <BlogImage src={imageUrl} />
      <BlogContent>
        <BlogDate>{publishedAt}</BlogDate>
        <BlogTitle>{title}</BlogTitle>
      </BlogContent>
    </StyledBlogItem>
  );
};
