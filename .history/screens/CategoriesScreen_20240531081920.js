import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function renderCategoryItem(item) {
  return <Cate;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreen;
