import { LoginScreen } from './Screens/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen';

import { Home } from './Screens/Home';
import { CommentsScreen } from './Screens/CommentsScreen';

import { MapScreen } from './Screens/MapScreen';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  })
}

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return <AuthStack.Navigator>
            <AuthStack.Screen options={{headerShown: false}} name='Register' component={RegistrationScreen} />
            <AuthStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
      </AuthStack.Navigator>
  }
  return <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} />
  </HomeStack.Navigator>
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  useEffect(() => {
    async function prepare() {
      try {
        SplashScreen.preventAutoHideAsync();
        await loadApplication();
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare()
  }, []);
  
    if (!isReady) {
    return null
  };

  return (
    <NavigationContainer>
          {routing}
    </NavigationContainer>
  );
}

