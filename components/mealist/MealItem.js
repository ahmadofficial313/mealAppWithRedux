import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "../MealDetail";
function MealItem({ id,title, imageUrl, duration, complexity, affordability }) {

  const [scaled, setScaled] = useState(false);
  const navigation=useNavigation()
  function pressHandler(){
      navigation.navigate("MealDetailScreen",{
        mealID:id
      });
  }

  return (
    
    <View style={styles.mealItem}>
      <Pressable
      onPress={pressHandler}
        android_ripple={{ color: 'gray' }}
        style={({pressed})=>[styles.button, pressed ? styles.buttonPressed: null]}
      >
        <View style={{borderRadius:8,overflow:'hidden'}}>
          <View >
          {/* <Pressable
            onPressIn={() => setScaled(true)}
            onPressOut={() => setScaled(false)}
          > */}
            {/* <View style={styles.imageContainer}> */}
              <Image
                source={{ uri: imageUrl }}
                style={[styles.image, scaled && styles.imageScaled]}
              />
            {/* </View> */}
          {/* </Pressable> */}
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
         <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>

    </View>
  )
}

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 15,

  },
  image: {
    width: '100%',
    height: 200
  },
  imageScaled: {
    transform: [{ scale: 1.1 }],
    // Scale up by 10%
  },
  imageContainer: {
    overflow: 'hidden',
  },
  buttonPressed:{
   opacity:0.9
  }
})