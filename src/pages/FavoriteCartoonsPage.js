import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import CartoonList from "../components/cartoon/CartoonList";

function FavoriteCartoons() {
  const FavoritesCtx = useContext(FavoritesContext);

  return (
    <div className="container">
      <h1 className="heading">My Favorites</h1>
      {FavoritesCtx.totalFavorites > 0 ? (
        <CartoonList cartoons={FavoritesCtx.favorites} />
      ) : (
        <h3>You don't have any favorites yet.</h3>
      )}
    </div>
  );
}

export default FavoriteCartoons;
