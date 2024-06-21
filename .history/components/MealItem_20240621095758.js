import { View, Pressable, Text } from "react-native";

function MealItem({ title }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
