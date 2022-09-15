import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledBlogItem = styled.li`
  background-color: ${Color.White};
  width: 352px;
  border-radius: 16px;
  list-style-type: none;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 208px;
`;

const BlogContent = styled.div`
  margin: 20px 20px;
`;

const BlogDate = styled.h3`
  margin-bottom: 5px;
`;

const BlogTitle = styled.h2``;

export { StyledBlogItem, BlogImage, BlogContent, BlogDate, BlogTitle };
