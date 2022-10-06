import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { ButtonHome, ErrorPage, StyledNotFoundPage, Title } from "./styles";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Title>OOPS!</Title>
      <ErrorPage>404 - THE PAGE CAN'T BE FOUND</ErrorPage>
      <Link to={ROUTE.HOME}>
        <ButtonHome>GO TO HOMEPAGE</ButtonHome>
      </Link>
    </StyledNotFoundPage>
  );
};
