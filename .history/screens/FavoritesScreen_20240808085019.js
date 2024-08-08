import { useContext } from "react-native";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  useContext(Favorit);

  return <MealsList/>;
}

export default FavoritesScreen;
