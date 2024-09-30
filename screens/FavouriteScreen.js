import { useContext } from "react";
import { View,Text,StyleSheet } from "react-native";
import { FavouriteContext } from '../store/context/favourite-Context';
import MealList from "../components/mealist/MealList";
import { MEALS } from "../data/dummy-data";
import Entypo from '@expo/vector-icons/Entypo';
function FavouriteScreen({}){
    const FavouriteMealContext=useContext(FavouriteContext)
    const favouriteMeal=MEALS.filter(meal=> FavouriteMealContext.ids.includes(meal.id))
   
    if(favouriteMeal.length===0){
        return(
      <View style={styles.container}>
        <View style={styles.innerContainer}>
        <Text style={styles.innerText}>Sorry </Text>
        <Entypo style={{marginTop:3}} name="emoji-sad" size={24} color="white" />
        </View>
      
      <Text style={styles.text}>
      You have no Favourite Meals yet
      </Text>
      </View>  
        )
    }
    else{
        return(
        <MealList item={favouriteMeal}/>
        )
    }
        
      

    
    
}

export default FavouriteScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontWeight:'bold'
    },
    innerContainer:{
        flexDirection:'row',
       
        marginBottom:10

    },
    innerText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }
})