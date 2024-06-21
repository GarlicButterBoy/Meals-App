import { View, Pressable, Text, Image, StyleSheet } from "react-native";

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
