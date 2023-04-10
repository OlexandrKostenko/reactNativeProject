import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './Screens/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen';

import { Home } from './Screens/Home';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export const useRoute = (isAuth) => {
  
  if (!isAuth) {
    return <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name='Register' component={RegistrationScreen}/>
            <AuthStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen}/>
      </AuthStack.Navigator>
  }
  return <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} />
  </HomeStack.Navigator>
}