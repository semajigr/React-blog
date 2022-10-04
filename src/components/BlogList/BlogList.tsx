import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "app/feautures";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getBlogs } from "app/selectors";
import { BlogItem, ErrorMessage, Spinner } from "components";
import { StyledBlogList } from "./styles";

export const BlogList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, blogs } = useAppSelector(getBlogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <StyledBlogList>
      {blogs.map((blog) => {
        return (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <BlogItem blog={blog} key={blog.id} />
          </Link>
        );
      })}
    </StyledBlogList>
  );
};
