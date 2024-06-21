import { View, Pressable, Text, Image } from "react-native";

function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: "imageUrl" }} />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
