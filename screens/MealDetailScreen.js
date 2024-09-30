import { Text, View, StyleSheet,Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/mealdetail/Subtitle';
import List from '../components/mealdetail/List';
import {  useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite,removeFavourite } from '../store/redux/favourite';
function MealDetailScreen({ route, navigation }) {
    const id = route.params.mealID;
    const FavouriteMeals = useSelector(state => state.favouriteMeals); // Accessing favouriteMeals from Redux store

    const mealDetail = MEALS.find((item) => item.id === id);
    const isFavourite = FavouriteMeals.ids.includes(id);
    const dispatch=useDispatch()
function changeFavouriteSatusHandler(){
    if(isFavourite){
       dispatch(removeFavourite({id:id}))
    }
    else{
        dispatch(addFavourite({id:id}))
    }
}
useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton 
            name={isFavourite ? 'heart': 'heart-outline'} color='white' onPress={changeFavouriteSatusHandler}/>
        }
    })
},[navigation,changeFavouriteSatusHandler])

   

    return (
        <ScrollView style={styles.rootScreen}>
           <Image style={styles.image} source={{ uri: mealDetail.imageUrl }}/>
            <Text style={styles.title}>{mealDetail.title}</Text>
            <MealDetail duration={mealDetail.duration}
            complexity={mealDetail.complexity}
            textStyle={styles.detailStlye}
            affordability={mealDetail.affordability}
            />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>

                <List data={mealDetail.ingredients}/>
                <Subtitle>steps </Subtitle>
                <List data={mealDetail.steps}/>
          </View>
        </View>
        </ScrollView>
    );
}

export default MealDetailScreen;
const styles=StyleSheet.create({
    rootScreen:{
        marginBottom:10
    },
    image:{
        width:'100%',
        height:300
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailStlye:{
        color:'white'
    },
    subtitle:{
    
        color:'#e2b497',
        fontWeight:'bold',
        fontSize:18,
      
        textAlign:'center',
       
        

    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:1,  
        padding:6,
        marginVertical:4,
        marginHorizontal:16
    },
    listContainer:{
        width:'80%'
    },
    listOuterContainer:{
        alignItems:'center'
    }
}) 
