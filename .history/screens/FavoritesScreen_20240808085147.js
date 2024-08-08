import { useContext } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))
  return <MealsList />;
}

export default FavoritesScreen;
