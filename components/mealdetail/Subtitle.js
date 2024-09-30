import { View,Text,StyleSheet } from "react-native"
function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
    </View> 
  )
}

export default Subtitle
const styles=StyleSheet.create({
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
        marginHorizontal:10
    }
})