import { Link } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { FavoritesArticle } from "components";
import { StyledFavorites } from "./styles";
import { getFavoriteArticle } from "app/selectors";

export const Favorites = () => {
  const { favorites } = useAppSelector(getFavoriteArticle);

  return (
    <StyledFavorites>
      {favorites.map((article) => {
        return (
          <Link to={`/article/${article.id}`} key={article.id}>
            <FavoritesArticle article={article} />
          </Link>
        );
      })}
    </StyledFavorites>
  );
};
