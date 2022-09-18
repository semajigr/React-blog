import { IArticles } from "../../types";
import { Content, Date, Image, Title, StyledBlogItem } from "./styles";

interface IProps {
  blog: IArticles;
}

export const BlogItem = (blog: IProps) => {
  return (
    <StyledBlogItem>
      <Image src={blog.blog.imageUrl} alt="blogimage" />
      <Content>
        <Date>{blog.blog.publishedAt}</Date>
        <Title>{blog.blog.title}</Title>
      </Content>
    </StyledBlogItem>
  );
};
