import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledBlogItem = styled.li`
  list-style-type: none;
  width: 352px;
  height: 388px;
  background-color: ${Color.White};
  border-radius: 16px;
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
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Secondary};
`;

export { StyledBlogItem, Image, Content, Date, Title };
