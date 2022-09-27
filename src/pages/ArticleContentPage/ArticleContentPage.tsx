import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByDetails } from "../../app/feautures/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelector";
import { Button, ContentImage, Description, Post, StyledArticleContent, Title } from "./styles";

export const ArticleContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsArticle);
  const { title, imageUrl, summary } = details;

  useEffect(() => {
    dispatch(fetchArticleByDetails(id!));
  }, [dispatch, id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <StyledArticleContent>
      <Button>
        Home <Post>/ Post {id}</Post>
      </Button>
      <Title>{title}</Title>
      <ContentImage src={imageUrl} />
      <Description>{summary}</Description>
    </StyledArticleContent>
  );
};
