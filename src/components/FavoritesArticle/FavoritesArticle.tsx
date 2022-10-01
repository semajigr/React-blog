import { removeFavorites } from "../../app/feautures/favoritesSlice";
import { useAppDispatch } from "../../app/hooks/hooks";
import { IArticles } from "../../types";
import { Description, Image, Date, StyledFavoritesArticle, Title, Button } from "./styles";

interface IProps {
  article: IArticles;
}

export const FavoritesArticle = ({ article }: IProps) => {
  const dispatch = useAppDispatch();
  const { imageUrl, publishedAt, title } = article;

  const handleDeleteArticle = (event: any) => {
    event.preventDefault();
    dispatch(removeFavorites(article.id));
  };
  return (
    <StyledFavoritesArticle>
      <Image src={imageUrl} alt="articleimage" />
      <Description>
        <Date>{publishedAt}</Date>
        <Title>{title}</Title>
        <Button onClick={handleDeleteArticle}>X</Button>
      </Description>
    </StyledFavoritesArticle>
  );
};
