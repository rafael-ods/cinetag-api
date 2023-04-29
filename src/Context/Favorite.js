import { useContext, useState, createContext } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favoritos";

export const FavoriteProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);
    
  return (
    <FavoriteContext.Provider value={{favorito, setFavorito}}>
        {children}
    </FavoriteContext.Provider>
  )

};

export const useFavoritoContext = () => {
  const { favorito, setFavorito } = useContext(FavoriteContext);

  const addFavorito = (newFavorito) => {
    const favoritoRepeated = favorito.some(
      (item) => item.id === newFavorito.id
    );

    let newList = [...favorito];
        
    if (!favoritoRepeated) {
      newList.push(newFavorito);
      return setFavorito(newList);
    }

    newList = favorito.filter((fav) => fav.id !== newFavorito.id)
    return setFavorito(newList);
  };

  return {
    favorito,
    addFavorito,
  };
};
