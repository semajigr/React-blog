import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBlogByDetails } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getDetailsBlog } from "app/selectors";
import { ErrorMessage, Spinner } from "components";
import { ROUTE } from "routes";
import { Button, ContentImage, Description, Post, StyledBlogContent, Title } from "./styles";

export const BlogContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, blogDetails } = useAppSelector(getDetailsBlog);
  const { title, imageUrl, summary } = blogDetails;

  useEffect(() => {
    id && dispatch(fetchBlogByDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <StyledBlogContent>
      <Link to={ROUTE.HOME}>
        <Button>
          Home <Post>/ Post {id}</Post>
        </Button>
      </Link>
      <Title>{title}</Title>
      <ContentImage src={imageUrl} />
      <Description>{summary}</Description>
    </StyledBlogContent>
  );
};
