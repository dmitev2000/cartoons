import { Link } from "react-router-dom";
import { useContext } from 'react';
import FavoritesContext from "../../store/favorites-context";

function Navigation() {

  const FavoritesCtx = useContext(FavoritesContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">Cartoons App</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">All cartoons</Link>
              <Link to="/add-new-cartoon" className="nav-link">Add a new cartoon</Link>
              <Link to="/favorites" className="nav-link">
                My favorites
                <span className="span-favs">{FavoritesCtx.totalFavorites}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
