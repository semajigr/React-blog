import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "..";
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
