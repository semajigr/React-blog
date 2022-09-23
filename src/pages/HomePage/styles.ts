import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledHomePage = styled.div`
  max-width: 1120px;
  margin-bottom: 72px;
`;

const Title = styled.h1`
  margin-top: 72px;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};
`;

export { StyledHomePage, Title };
