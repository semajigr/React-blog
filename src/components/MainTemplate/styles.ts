import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.Gray};
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  width: 1120px;
`;

const Main = styled.div`
  min-height: 100vh;
`;

export { StyledMainTemplate, Container, Main };
