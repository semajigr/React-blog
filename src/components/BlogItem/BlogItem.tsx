import { addToFavorites } from "../../app/feautures/favoritesSlice";
import { useAppDispatch } from "../../app/hooks/hooks";
import { IArticles, IBlogs } from "../../types";
import { Content, Date, Image, Title, StyledBlogItem, Button, FavoriteIcon } from "./styles";

interface IProps {
  blog: IBlogs;
}

export const BlogItem = ({ blog }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  const dispatch = useAppDispatch();

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
        <Button onClick={handleAddToFavorites}>
          <FavoriteIcon />
        </Button>
      </Content>
    </StyledBlogItem>
  );
};
