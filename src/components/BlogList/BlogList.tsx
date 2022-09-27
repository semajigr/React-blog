import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogItem, Spinner } from "..";
import { fetchBlogs } from "../../app/feautures/blogSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getBlogs } from "../../app/selectors/blogSelector";
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
    return <h1>Error...</h1>;
  }

  return (
    <StyledBlogList>
      {blogs.map((blog) => {
        return (
          <Link to={`/blog/${blog.id}`}>
            <BlogItem blog={blog} key={blog.id} />
          </Link>
        );
      })}
    </StyledBlogList>
  );
};
