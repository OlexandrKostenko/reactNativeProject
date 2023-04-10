import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './AuthContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from './router';

const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  })
}


const MainTab = createBottomTabNavigator();

export default function App () {
  const [isReady, setIsReady] = useState(false);
  const { isAuth } = useAuth;
  
  

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
    <AuthProvider>
    <NavigationContainer>
          {useRoute(isAuth)}
      </NavigationContainer>
      </AuthProvider>
  );
}

