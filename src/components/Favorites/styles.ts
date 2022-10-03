import styled from "styled-components";
import { Media } from "../../ui/intex";

const StyledFavorites = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 40px 32px;

  ${Media.LG} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 16px;
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledFavorites };
