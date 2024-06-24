import React from "react";
import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;
    const 

  return (
    <>
      <View>
        <Image />
        <Text>This is the Meal Detail Screen ({mealId})</Text>
        <View></View>
              <Text>Ingredients</Text>
              
              <Text>Steps</Text>
              
      </View>
    </>
  );
}

export default MealDetailScreen;
