import React from "react";
import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} />
        <Text>This is the Meal Detail Screen ({mealId})</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => )}
        <Text>Steps</Text>
      </View>
    </>
  );
}

export default MealDetailScreen;
