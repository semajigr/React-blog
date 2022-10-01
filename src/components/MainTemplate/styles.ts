import styled from "styled-components";
import { Media } from "../../ui/breakpoints";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  ${Media.LG} {
  }
`;

const Container = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  ${Media.LG} {
    width: 686px;
  }

  ${Media.MD} {
    width: 271px;
    padding: 0;
  }
`;

const Main = styled.div`
  flex-grow: 1;
`;

export { StyledMainTemplate, Container, Main };
