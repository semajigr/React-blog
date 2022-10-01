import Select, { SingleValue } from "react-select";
import { fetchSelectArticles } from "../../app/feautures/articleSlice";
import { useAppDispatch } from "../../app/hooks/hooks";
import { IOption } from "../../types";

const options = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
];

export const CustomSelectArticle = () => {
  const dispatch = useAppDispatch();

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) dispatch(fetchSelectArticles(option.value));
  };

  return <Select options={options} onChange={handleSort} />;
};
