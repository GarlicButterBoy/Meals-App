import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View>
      <Text >{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({});
