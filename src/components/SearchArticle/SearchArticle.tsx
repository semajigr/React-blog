import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSearchArticles } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getSearchArticles } from "app/selectors";
import { IArticles } from "types";
import { ArticleItem, ErrorMessage, Spinner } from "components";
import { StyledSearchArticle } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchArticle = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getSearchArticles);

  useEffect(() => {
    value !== "" ? dispatch(fetchSearchArticles(value)) : dispatch(fetchSearchArticles("@"));
  }, [dispatch, value]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return articles.length === 0 ? (
    <h1></h1>
  ) : (
    <StyledSearchArticle>
      {articles.map((article: IArticles) => {
        return (
          <Link to={`/articles/${article.id}`}>
            <ArticleItem article={article} />
          </Link>
        );
      })}
    </StyledSearchArticle>
  );
};
