import { View, Text, StyleSheet } from "react-native";

function List({data}) {
  return data.ingredients.map((ingredient) => (
    <View>
      <Text key={ingredient}>{ingredient}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({});
