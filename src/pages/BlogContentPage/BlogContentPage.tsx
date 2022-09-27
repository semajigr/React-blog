import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogByDetails } from "../../app/feautures/blogDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getDetailsBlog } from "../../app/selectors/blogDetailsSelector";
import { Spinner } from "../../components/Spinner/Spinner";
import { Button, ContentImage, Description, Post, StyledBlogContent, Title } from "./styles";

export const BlogContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsBlog);
  const { title, imageUrl, summary } = details;

  useEffect(() => {
    dispatch(fetchBlogByDetails(id!));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <StyledBlogContent>
      <Button>
        Home <Post>/ Post {id}</Post>
      </Button>
      <Title>{title}</Title>
      <ContentImage src={imageUrl} />
      <Description>{summary}</Description>
    </StyledBlogContent>
  );
};
