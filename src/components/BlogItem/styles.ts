import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledBlogItem = styled.li`
  background-color: ${Color.White};
  width: 352px;
  border-radius: 16px;
  list-style-type: none;
`;

const Image = styled.img`
  width: 100%;
  height: 208px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Content = styled.div`
  margin: 20px 20px;
`;

const Date = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Secondary};
`;

export { StyledBlogItem, Image, Content, Date, Title };
