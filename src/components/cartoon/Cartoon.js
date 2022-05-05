import "./Cartoon.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function Cartoon(props) {
  const FavoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(props.id);
    } else {
      FavoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        year: props.year,
        country: props.country,
      });
    }
  }

  return (
    <div className="card pt-2 pb-2 col-3">
      <div className="card-header">
        <h5>{props.title}</h5>
        <p>
          {props.country}, {props.year}
        </p>
      </div>
      <div className="card-body">
        <img
          className="cartoon-img card-img"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="card-footer">
        <button
          className={
            itemIsFavorite
              ? "btn btn-outline-danger cartoon-btn"
              : "btn btn-outline-primary cartoon-btn"
          }
          onClick={toggleFavoritesStatusHandler}
        >
          {itemIsFavorite ? "Remove from favorites" : "To favorites"}
        </button>
      </div>
    </div>
  );
}

export default Cartoon;
