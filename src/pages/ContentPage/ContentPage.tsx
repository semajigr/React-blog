import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByDetails } from "../../app/feautures/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelector";

export const ContentPage = () => {
  useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsArticle);

  useEffect(() => {
    dispatch(fetchArticleByDetails());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return <div></div>;
};
