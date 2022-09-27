import { useEffect } from "react";
import Select from "react-select";
import { fetchArticles } from "../../app/feautures/articleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getArticles } from "../../app/selectors/articleSelector";

const options = [
  { value: "&_sort=title", label: "Title" },
  { value: "&_sort=publishedAt", label: "Date" },
];

export const CustomSelect = () => {
  const dispatch = useAppDispatch();
  const { isLoading, articles, error } = useAppSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleSort = (option: any) => {};

  return <Select options={options} onChange={handleSort} />;
};
