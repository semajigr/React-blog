import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchArticleByDetails } from "../../app/feautures/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelector";
import { ROUTE } from "../../routes";
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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
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
