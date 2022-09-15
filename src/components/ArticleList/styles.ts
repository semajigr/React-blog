import styled from "styled-components";

const StyledArticleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px 20px;
`;

export { StyledArticleList };
