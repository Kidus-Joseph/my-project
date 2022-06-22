import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {} from 'react-native-safe-area-context'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {} from 'react-native-vector-icons'
import {} from '@react-native-async-storage/async-storage'
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MyCart' component={MyCart}/>
        <Stack.Screen name='ProductInfo' component={ProductInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;