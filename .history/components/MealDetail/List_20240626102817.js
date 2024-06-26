import { View, Text, StyleSheet } from "react-native";

function List() {
  return {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))};
}

export default List;

const styles = StyleSheet.create({

});