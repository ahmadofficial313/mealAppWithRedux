import { View,Text,FlatList,StyleSheet } from "react-native"
import MealItem from "./MealItem";
function MealList({item}){
    // Function to render each meal item 
  function renderMealItem(itemData) {

        const item=itemData.item;
        const mealItemProps={
          id:item.id,
          title:item.title,
          imageUrl:item.imageUrl,
          affordability:item.affordability,
          complexity:item.complexity,
          duration:item.duration,
        }
        return (
          <MealItem
            {...mealItemProps}
          />
        );
      }
    
      return (
        <View style={styles.container}>
          <FlatList 
            data={item}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
    
    } 

export default MealList
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });