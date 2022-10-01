import { Favorites } from "../../components";
import { StyledFavoritesPage, Title } from "./styles";

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <Title>Favorites</Title>
      <Favorites />
    </StyledFavoritesPage>
  );
};
