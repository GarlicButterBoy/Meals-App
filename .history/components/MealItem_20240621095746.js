import { View, Pressable, Text } from "react-native";

function MealItem({ title }) {
  return (
    <View>
      <Pressable>
        <View></View>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

export default MealItem;
