import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getArticles } from "app/selectors";
import { ArticleItem, ErrorMessage, Spinner } from "components";
import { StyledArticleList } from "./styles";

export const ArticleList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <StyledArticleList>
      {articles.map((article) => {
        return (
          <Link to={`/article/${article.id}`} key={article.id}>
            <ArticleItem article={article} key={article.id} />
          </Link>
        );
      })}
    </StyledArticleList>
  );
};
