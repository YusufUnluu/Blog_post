import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider } from './context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import { AntDesign } from '@expo/vector-icons';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitle:"Blog"}}>
          <Stack.Screen name="Index" component={IndexScreen} options={({navigation}) =>({
            headerRight:() =>(
              <TouchableOpacity onPress={() => {
                navigation.navigate("Create")
              }}>
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Show" component={ShowScreen} options={({navigation,route}) =>({
            headerRight:() =>(
              <TouchableOpacity onPress={() => {
                navigation.navigate("Edit",{id:route.params.id})
              }}>
                <AntDesign name="edit" size={35} color="black" />
              </TouchableOpacity>
            )
          })}/>
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({})