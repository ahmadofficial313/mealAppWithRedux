import { View, Text, StyleSheet, Pressable, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
function CategoryGridTile({title,color,onPress}) {
   const navigation= useNavigation();
  return (
   <View style={styles.gridItem}>
    <Pressable android_ripple={{color:'#ccc'}}
     style={({pressed})=> [styles.button, pressed ? styles.pressed :null]} 
    onPress={onPress}
     >
        <View style={[styles.innerContainer, {backgroundColor:color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </Pressable>
   </View>
  )
}

export default CategoryGridTile
const styles= StyleSheet.create({
     gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:10,
        elevation:4,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        overflow:'hidden'

     },
     innerContainer:{
        flex:1,
        padding:16,
        alignItems:'center',
        justifyContent:'center'
     },
     button:{
        flex:1
     },
     title:{
        fontWeight:'bold',
        fontSize:18,
  
    
     },
     pressed:{
        opacity:0.5

     }
})