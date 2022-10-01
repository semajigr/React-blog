import { addToFavorites } from "../../app/feautures/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getUserInfo } from "../../app/selectors/userSelector";
import { IBlogs } from "../../types";
import { Content, Date, Image, Title, StyledBlogItem, Button, FavoriteIcon } from "./styles";

interface IProps {
  blog: IBlogs;
}

export const BlogItem = ({ blog }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getUserInfo);

  const handleAddToFavorites = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(blog));
  };

  return (
    <StyledBlogItem>
      <Image src={imageUrl} alt="blogimage" />
      <Content>
        <Date>{publishedAt}</Date>
        <Title>{title}</Title>
        {isAuth ? (
          <Button onClick={handleAddToFavorites}>
            <FavoriteIcon />
          </Button>
        ) : (
          ""
        )}
      </Content>
    </StyledBlogItem>
  );
};
