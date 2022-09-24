import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByDetails } from "../../app/feautures/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getDetailsBlog } from "../../app/selectors/blogDetailsSelector";
import { Spinner } from "../../components/Spinner/Spinner";
import { ContentImage, Description, StyledBlogContent, Title } from "./styles";

export const BlogContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsBlog);

  useEffect(() => {
    dispatch(fetchArticleByDetails(id!));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error...</h1>;
  }
  console.log(details);

  return (
    <StyledBlogContent>
      <Title>{details.title}</Title>
      <ContentImage src={details.imageUrl} />
      <Description>{details.summary}</Description>
    </StyledBlogContent>
  );
};
