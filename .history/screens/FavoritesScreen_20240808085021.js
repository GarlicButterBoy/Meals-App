import { useContext } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  useContext(FavoritesContext);

  return <MealsList/>;
}

export default FavoritesScreen;
