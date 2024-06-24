import React from "react";
import { View, Text, Image } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <>
      <View>
        <Image />
        <Text>This is the Meal Detail Screen ({mealId})</Text>;<View></View>
      </View>
    </>
  );
}

export default MealDetailScreen;
