import { addToFavorites } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { nasa } from "assets";
import { format } from "date-fns";
import { IBlogs } from "types";
import { Content, CustomDate, Image, Title, StyledBlogItem, Button, FavoriteIcon } from "./styles";

interface IProps {
  blog: IBlogs;
}

export const BlogItem = ({ blog }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getUserInfo);
  const date = format(new Date(publishedAt), "MMMM do, Y");

  const handleAddToFavorites = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(blog));
  };

  return (
    <StyledBlogItem whileHover={{ scale: 1.01 }}>
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
    </StyledBlogItem>
  );
};
