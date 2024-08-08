import React from 'react'

function MealsList() {
function renderMealItem(itemData) {
  const item = itemData.item;
  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    complexity: item.complexity,
    duration: item.duration,
    affordability: item.affordability,
  };
  return <MealItem {...mealItemProps} />;
}

return (
  <View style={styles.container}>
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  </View>
);
}

export default MealsList
