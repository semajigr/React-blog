import { useAppSelector } from "app/hooks";
import { getFavoriteArticle } from "app/selectors";
import { Favorites } from "components";
import { Container, CountAllArticles, Description, StyledFavoritesPage, Title } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavoriteArticle);

  return (
    <StyledFavoritesPage>
      <Container>
        <Title>Favorites</Title>
        {favorites.length && <CountAllArticles>All count: {favorites.length}</CountAllArticles>}
      </Container>
      {favorites.length === 0 ? (
        <Description>You need to add something...</Description>
      ) : (
        <>
          <Favorites />
        </>
      )}
    </StyledFavoritesPage>
  );
};
