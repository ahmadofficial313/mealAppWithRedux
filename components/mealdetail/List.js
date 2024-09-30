import { View, Text, StyleSheet } from "react-native"

function List({data}) {
  return (
    
     data.map((dataPoint)=>
        <View key={dataPoint} style={styles.listitem}>
              <Text style={styles.itemText} >{dataPoint}</Text>
          </View> 
            )
  
  )
}

export default List
const styles=StyleSheet.create({
  listitem:{
    marginVertical:4,
    marginHorizontal:12,
    borderRadius:6,
    paddingHorizontal:8,
    paddingHorizontal:4,
    backgroundColor:'#e2b497',
  },
  itemText:{
    color:'#351401',
    textAlign:'center'
  }
})