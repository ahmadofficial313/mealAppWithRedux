import { StatusBar } from 'expo-status-bar';
import {   StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverViewScreen from './screens/MealOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import {Ionicons} from '@expo/vector-icons'

import {store} from './store/redux/store'
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
 const Drawer=createDrawerNavigator();
 function DrawerNavigator(){
    return<Drawer.Navigator
    screenOptions={{
      headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#3f2f25'},
       headerBackTitle:'Back',
       drawerInactiveTintColor:'white',
       drawerContentStyle:{backgroundColor:'#351401'},
       drawerActiveBackgroundColor:'#e4baa1',
       drawerActiveTintColor:'#351401'
  }}
    >
      <Drawer.Screen name="Categories"
      component={CategoriesScreen}
      options={{
          title:"All Categories",
          drawerIcon: ({color, size})=>(
          <Ionicons size={size} color={color} name="list"/>
        )
      }}
      />
       <Drawer.Screen name="Favourites"
      component={FavouriteScreen}
      options={{
        title:"Your Favourites",
        drawerIcon: ({color, size})=>(
          <Ionicons size={size} color={color} name="heart"/>
        )}}
      />
    </Drawer.Navigator>
 }
export default function App() {
 
  return (
    <>
    <Provider store={store}>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'},
           headerBackTitle:'Back'
      }}>
        <Stack.Screen 
        name='Drawer'
        options={{
          headerShown:false
        }}
      component={DrawerNavigator}/>

        <Stack.Screen name='MealsOverview'
         component={MealOverViewScreen}
        //  options={({route , navigation})=>{
        //   const catID= route.params.categoryId
        //   return{
        //     title:catID,
        //   }
        //  }}
         />
         <Stack.Screen name='MealDetailScreen'
         component={MealDetailScreen}
         options={{
          title:'About the Meal'
         }}
         />
      </Stack.Navigator>
   
    </NavigationContainer>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:16
    
  },
});
