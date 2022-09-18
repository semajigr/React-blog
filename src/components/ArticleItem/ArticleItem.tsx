import { IArticles } from "../../types";
import { Content, Date, Image, Title, StyledArticleItem } from "./styles";

interface IProps {
  article: IArticles;
}

export const ArticleItem = (article: IProps) => {
  return (
    <StyledArticleItem>
      <Image src={article.article.imageUrl} alt="articleimage" />
      <Content>
        <Date>{article.article.publishedAt}</Date>
        <Title>{article.article.title}</Title>
      </Content>
    </StyledArticleItem>
  );
};
