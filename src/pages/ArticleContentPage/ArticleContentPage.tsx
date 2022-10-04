import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticleByDetails } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getDetailsArticle } from "app/selectors";
import { Spinner, ErrorMessage } from "components";
import { ROUTE } from "routes";
import { Button, ContentImage, Description, Post, StyledArticleContent, Title } from "./styles";

export const ArticleContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, articleDetails } = useAppSelector(getDetailsArticle);
  const { title, imageUrl, summary } = articleDetails;

  useEffect(() => {
    id && dispatch(fetchArticleByDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <StyledArticleContent>
      <Link to={ROUTE.HOME}>
        <Button>
          Home <Post>/ Post {id}</Post>
        </Button>
      </Link>
      <Title>{title}</Title>
      <ContentImage src={imageUrl} />
      <Description>{summary}</Description>
    </StyledArticleContent>
  );
};
