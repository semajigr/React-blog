import { useEffect } from "react";
import { BlogItem } from "..";
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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <StyledBlogList>
      {blogs.map((blog) => {
        return <BlogItem blog={blog} />;
      })}
    </StyledBlogList>
  );
};
