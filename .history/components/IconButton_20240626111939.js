import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton() {
  return (
    <Pressable>
      <Ionicons name="star" si/>
    </Pressable>
  );
}

export default IconButton;
