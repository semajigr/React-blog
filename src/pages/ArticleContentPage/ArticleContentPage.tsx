import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByDetails } from "../../app/feautures/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelector";
import { ContentImage, Description, StyledArticleContent, Title } from "./styles";

export const ArticleContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsArticle);

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
      <Title>{details.title}</Title>
      <ContentImage src={details.imageUrl} />
      <Description>{details.summary}</Description>
    </StyledArticleContent>
  );
};
