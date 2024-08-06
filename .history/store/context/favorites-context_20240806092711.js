import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
   const useState([]);

  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}
export default FavoritesContextProvider;
