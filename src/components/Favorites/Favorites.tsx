import { Link } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { FavoritesArticle } from "components";
import { StyledFavorites } from "./styles";

export const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.persistedReducer.favorites);

  return (
    <StyledFavorites>
      {favorites.map((article) => {
        return (
          <Link to={`/article/${article.id}`} key={article.id}>
            <FavoritesArticle article={article} key={article.id} />
          </Link>
        );
      })}
    </StyledFavorites>
  );
};
