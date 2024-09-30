
import { MEALS, CATEGORIES } from '../data/dummy-data';
import {  useLayoutEffect } from 'react';
import MealList from '../components/mealist/MealList';

function MealOverViewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  // Filter meals based on category ID
  const displayedMeals = MEALS.filter((itemData) => {
    return itemData.categoryIds.indexOf(catID) >= 0;
  });

  

  
  // useEffect(() => {
  //   const categoryTitle = CATEGORIES.find(
  //   (category) => category.id === catID).title; 

  //   navigation.setOptions({
  //     title: categoryTitle , // Default title if not found
  //   });
  // }, [ catID,navigation]); // Add dependencies

  useLayoutEffect(() => {
    // Find the category title
    const categoryTitle = CATEGORIES.find(
    (category) => category.id === catID).title; 
    // Set navigation options 
    navigation.setOptions({
      title: categoryTitle 
    });
  }, [ catID,navigation]); // Add dependencies

  return <MealList item={displayedMeals}/>
  
    
}

export default MealOverViewScreen;


