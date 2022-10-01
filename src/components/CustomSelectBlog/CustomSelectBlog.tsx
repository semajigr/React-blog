import Select, { SingleValue } from "react-select";
import { fetchSelectBlogs } from "../../app/feautures/blogSlice";
import { useAppDispatch } from "../../app/hooks/hooks";
import { IOption } from "../../types";

const options = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
];

export const CustomSelectBlog = () => {
  const dispatch = useAppDispatch();

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) dispatch(fetchSelectBlogs(option.value));
  };

  return <Select options={options} onChange={handleSort} />;
};
