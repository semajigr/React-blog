import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByDetails } from "../../app/feautures/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelector";
import { ContentImage, Description, StyledContent, Title } from "./styles";

export const ContentPage = () => {
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
  console.log(details);

  return (
    <StyledContent>
      <Title>{details.title}</Title>
      <ContentImage src={details.imageUrl} />
      <Description>{details.summary}</Description>
    </StyledContent>
  );
};
