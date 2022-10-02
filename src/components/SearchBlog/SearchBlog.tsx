import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSearchBlogs } from "../../app/feautures/blogSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getSearchBlogs } from "../../app/selectors/blogSearch";
import { IBlogs } from "../../types";
import { BlogItem } from "../BlogItem/BlogItem";
import { Spinner } from "../Spinner/Spinner";
import { StyledSearchBlog } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBlog = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, blogs } = useAppSelector(getSearchBlogs);

  useEffect(() => {
    value !== "" ? dispatch(fetchSearchBlogs(value)) : dispatch(fetchSearchBlogs("@"));
  }, [dispatch, value]);

  if (isLoading) {
    return <h1></h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return blogs.length === 0 ? (
    <h1></h1>
  ) : (
    <StyledSearchBlog>
      {blogs.map((blogs: IBlogs) => {
        return (
          <Link to={`/blogs/${blogs.id}`}>
            <BlogItem blog={blogs} />
          </Link>
        );
      })}
    </StyledSearchBlog>
  );
};
