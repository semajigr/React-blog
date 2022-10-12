import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSearchBlogs } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getSearchBlogs } from "app/selectors";
import { IBlogs } from "types";
import { BlogItem, NotFound } from "components";
import { StyledSearchBlog } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBlog = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector(getSearchBlogs);

  useEffect(() => {
    value !== "" ? dispatch(fetchSearchBlogs(value)) : dispatch(fetchSearchBlogs("@"));
  }, [dispatch, value]);

  return blogs.length === 0 ? (
    <NotFound />
  ) : (
    <StyledSearchBlog>
      {blogs.map((blogs: IBlogs) => {
        return (
          <Link to={`/blog/${blogs.id}`} key={blogs.id}>
            <BlogItem blog={blogs} />
          </Link>
        );
      })}
    </StyledSearchBlog>
  );
};
