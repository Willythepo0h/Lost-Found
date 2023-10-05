import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Sign_Up from './screens/Sign_Up';
import Forgot_Password from './screens/Forgot_Password';
import Circle_Indicator from './Components/Circle_Indicator';
import Homepage from './screens/Homepage';

const Stack = createStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Sign_Up" component={Sign_Up}/>
        <Stack.Screen name="Forgot_Password" component={Forgot_Password}/>
        {/* <Stack.Screen name="Homepage" component={Homepage}/> */}
       </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;