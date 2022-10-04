import { addToFavorites } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { IBlogs } from "types";
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
