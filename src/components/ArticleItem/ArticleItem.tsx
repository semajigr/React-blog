import { addToFavorites } from "../../app/feautures/favoritesSlice";
import { useAppDispatch } from "../../app/hooks/hooks";
import { IArticles } from "../../types";
import { Content, Date, Image, Title, StyledArticleItem, Button, FavoriteIcon } from "./styles";

interface IProps {
  article: IArticles;
}

export const ArticleItem = ({ article }: IProps) => {
  const { imageUrl, publishedAt, title } = article;
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(article));
  };

  return (
    <StyledArticleItem>
      <Image src={imageUrl} alt="articleimage" />
      <Content>
        <Date>{publishedAt}</Date>
        <Title>{title}</Title>
        <Button onClick={handleAddToFavorites}>
          <FavoriteIcon />
        </Button>
      </Content>
    </StyledArticleItem>
  );
};
