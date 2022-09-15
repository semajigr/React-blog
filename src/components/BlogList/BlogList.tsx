import React, { useEffect } from "react";
import { fetchBlogs } from "../../app/feautures/blogSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { getBlogs } from "../../app/selectors/blogSelector";
import { BlogItem } from "../BlogItem/BlogItem";
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
      {blogs.map(({ title, imageUrl, publishedAt }) => {
        return (
          <BlogItem
            imageUrl={imageUrl}
            title={title}
            publishedAt={publishedAt}
          />
        );
      })}
    </StyledBlogList>
  );
};
