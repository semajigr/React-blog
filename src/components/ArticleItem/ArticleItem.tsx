import { addToFavorites } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { nasa } from "assets";
import { format } from "date-fns";
import { IArticles } from "types";
import {
  Content,
  CustomDate,
  Image,
  Title,
  StyledArticleItem,
  Button,
  FavoriteIcon,
} from "./styles";

interface IProps {
  article: IArticles;
}

export const ArticleItem = ({ article }: IProps) => {
  const { imageUrl, publishedAt, title } = article;
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getUserInfo);
  const date = format(new Date(publishedAt), "MMMM do, Y");

  const handleAddToFavorites = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(article));
  };

  return (
    <StyledArticleItem whileHover={{ scale: 1.01 }}>
      <Image src={imageUrl.endsWith(".jpg") ? imageUrl : nasa} alt={title} />
      <Content>
        <CustomDate>{date}</CustomDate>
        <Title>{title}</Title>
        {isAuth ? (
          <Button onClick={handleAddToFavorites}>
            <FavoriteIcon />
          </Button>
        ) : (
          ""
        )}
      </Content>
    </StyledArticleItem>
  );
};
