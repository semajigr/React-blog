import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/intex";

const StyledFavoritesPage = styled.div`
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-top: 72px;
  margin-bottom: 50px;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }
`;

export { StyledFavoritesPage, Title };
