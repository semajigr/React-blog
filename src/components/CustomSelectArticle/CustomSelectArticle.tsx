import Select, { SingleValue } from "react-select";
import { fetchSelectArticles } from "app/feautures";
import { useAppDispatch } from "app/hooks";
import { IOption } from "types";
import { CustomStyles } from "./styles";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
];

export const CustomSelectArticle = () => {
  const dispatch = useAppDispatch();

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) dispatch(fetchSelectArticles(option.value));
  };

  return (
    <Select options={options} onChange={handleSort} styles={CustomStyles} isSearchable={false} />
  );
};
