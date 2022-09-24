import styled from "styled-components";
import { Media } from "../../ui/breakpoints";
import { Color } from "../../ui/colors";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;

  ${Media.LG} {
  }
`;

const Container = styled.div`
  flex-grow: 1;
  width: 1120px;
  margin: 0 auto;

  ${Media.LG} {
    width: 686px;
    margin: 0 auto;
  }

  ${Media.MD} {
    width: 271px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
`;

export { StyledMainTemplate, Container, Main };
