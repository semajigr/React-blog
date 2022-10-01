import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArticleItem, Spinner } from "..";
import { fetchArticles } from "../../app/feautures/articleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getArticles } from "../../app/selectors/articleSelector";
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
    return <h1>Error...</h1>;
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
