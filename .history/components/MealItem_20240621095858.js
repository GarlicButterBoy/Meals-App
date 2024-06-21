import { View, Pressable, Text, Image } from "react-native";

function MealItem({ title }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={/>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
