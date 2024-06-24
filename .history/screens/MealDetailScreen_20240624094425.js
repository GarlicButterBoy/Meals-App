import React from "react";
import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Image />
      <Text>This is the Meal Detail Screen ({mealId})</Text>;

      </View>
  );
}

export default MealDetailScreen;
