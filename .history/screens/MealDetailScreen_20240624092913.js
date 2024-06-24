import React from "react";
import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>This is the Meal Detail Screen</Text>;
}

export default MealDetailScreen;
