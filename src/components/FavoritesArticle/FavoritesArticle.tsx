import { removeFavorites } from "app/feautures";
import { useAppDispatch } from "app/hooks";
import { format } from "date-fns";
import { IArticles } from "types";
import { Description, Image, CustomDate, StyledFavoritesArticle, Title, Button } from "./styles";

interface IProps {
  article: IArticles;
}

export const FavoritesArticle = ({ article }: IProps) => {
  const dispatch = useAppDispatch();
  const { imageUrl, publishedAt, title } = article;
  const date = format(new Date(publishedAt), "MMMM do, Y");

  const handleDeleteArticle = (event: any) => {
    event.preventDefault();
    dispatch(removeFavorites(article.id));
  };
  return (
    <StyledFavoritesArticle>
      <Image src={imageUrl} alt="articleimage" />
      <Description>
        <CustomDate>{date}</CustomDate>
        <Title>{title}</Title>
        <Button onClick={handleDeleteArticle}>X</Button>
      </Description>
    </StyledFavoritesArticle>
  );
};
