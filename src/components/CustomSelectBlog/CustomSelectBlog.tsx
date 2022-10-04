import Select, { SingleValue } from "react-select";
import { fetchSelectBlogs } from "app/feautures";
import { useAppDispatch } from "app/hooks";
import { IOption } from "types";
import { StyledCustomSelectBlog } from "./styles";

const options = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
];

export const CustomSelectBlog = () => {
  const dispatch = useAppDispatch();

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) dispatch(fetchSelectBlogs(option.value));
  };

  return <Select options={options} onChange={handleSort} styles={StyledCustomSelectBlog} />;
};
