import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";
import { fetchArticles } from "../../app/feautures/articleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getArticles } from "../../app/selectors/articleSelector";
import { ArticleItem } from "../ArticleItem/ArticleItem";
import { StyledArticleList } from "./styles";

export const ArticleList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <StyledArticleList>
      {articles.map(({ title, imageUrl, publishedAt }) => {
        return (
          <ArticleItem
            imageUrl={imageUrl}
            title={title}
            publishedAt={publishedAt}
          />
        );
      })}
    </StyledArticleList>
  );
};
