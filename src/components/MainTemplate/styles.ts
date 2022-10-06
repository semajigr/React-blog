import styled from "styled-components";
import { Media } from "ui/intex";

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
    width: 728px;
  }

  ${Media.MD} {
    width: 311px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
`;

export { StyledMainTemplate, Container, Main };
