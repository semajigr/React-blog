import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledArticleItem = styled.li`
  background-color: ${Color.White};
  width: 352px;
  border-radius: 16px;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 208px;
`;

const ArticleContent = styled.div`
  margin: 20px 20px;
`;

const ArticleDate = styled.h3`
  margin-bottom: 5px;
`;

const ArticleTitle = styled.h2``;

export {
  StyledArticleItem,
  ArticleImage,
  ArticleContent,
  ArticleDate,
  ArticleTitle,
};
