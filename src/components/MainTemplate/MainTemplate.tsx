import { Footer, Navbar } from "components";
import { Outlet } from "react-router-dom";
import { Container, Main, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Navbar />
      <Container>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Container>
    </StyledMainTemplate>
  );
};
