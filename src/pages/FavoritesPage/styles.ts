import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledFavoritesPage = styled.div`
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-top: 72px;
  margin-bottom: 50px;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};
`;

export { StyledFavoritesPage, Title };
