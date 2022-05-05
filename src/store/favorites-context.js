import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (cartoon) => {},
  removeFavorite: (cartoonId) => {},
  itemIsFavorite: (cartoonId) => {}
});

export function FavoritesContextProvider(props) {
  
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteCartoon) {
        setUserFavorites((prev) => {
            return prev.concat(favoriteCartoon);
        });
    }

    function removeFavoriteHandler(cartoonId) {
        setUserFavorites((prev) => {
            return prev.filter(cartoon => cartoon.id !== cartoonId);
        })
    }

    function itemIsFavoriteHandler(cartoonId) {
        return userFavorites.some(cartoon => cartoon.id === cartoonId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;