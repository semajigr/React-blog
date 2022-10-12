import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBlogByDetails } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getDetailsBlog } from "app/selectors";
import { ErrorMessage, Spinner, Slider } from "components";
import { ROUTE } from "routes";
import {
  AboutContent,
  Button,
  ContentDate,
  ContentImage,
  Description,
  ImageDescription,
  LinkLearnMore,
  Post,
  StyledBlogContent,
  Title,
} from "./styles";
import { nasa } from "assets";

export const BlogContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, blogDetails, similar } = useAppSelector(getDetailsBlog);
  const { title, imageUrl, summary, newsSite, url } = blogDetails;

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
      <ImageDescription>
        <ContentImage src={imageUrl.endsWith(".jpg") ? imageUrl : nasa} />
        <ContentDate>
          <AboutContent>{newsSite}</AboutContent>
        </ContentDate>
      </ImageDescription>
      <Description>{summary}</Description>
      <LinkLearnMore href={url}>Learn more</LinkLearnMore>
      <Slider similar={similar} />
    </StyledBlogContent>
  );
};
