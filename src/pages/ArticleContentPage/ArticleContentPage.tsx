import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticleByDetails } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getDetailsArticle } from "app/selectors";
import { Spinner, ErrorMessage, Slider } from "components";
import { ROUTE } from "routes";
import {
  AboutContent,
  Button,
  ContentDate,
  ImageDescription,
  ContentImage,
  Description,
  Post,
  StyledArticleContent,
  Title,
  LinkLearnMore,
} from "./styles";

export const ArticleContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, articleDetails, similar } = useAppSelector(getDetailsArticle);
  const { title, imageUrl, summary, newsSite, url } = articleDetails;

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
      <ImageDescription>
        <ContentImage src={imageUrl} />
        <ContentDate>
          <AboutContent>{newsSite}</AboutContent>
        </ContentDate>
      </ImageDescription>
      <Description>{summary}</Description>
      <LinkLearnMore href={url}>Learn more</LinkLearnMore>
      <Slider similar={similar} />
    </StyledArticleContent>
  );
};
