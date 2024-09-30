import { Pressable , StyleSheet} from "react-native"
import {Ionicons} from '@expo/vector-icons'
function IconButton({onPress, color, name}) {
  return (
        <Pressable style={({pressed})=>pressed ? styles.buttonPressed : null}>
            <Ionicons name={name} onPress={onPress} color={color} size={20}/>
        </Pressable>
  )
}

export default IconButton
const styles=StyleSheet.create({
  buttonPressed:{
    opacity:0.7
  }
})