import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Keyboard, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import { LoginScreen } from './Screens/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import * as Font from 'expo-font';
import { AppLoading }  from 'expo';
import { useState } from 'react';

const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  
    if (!isReady) {
    return (<AppLoading
      startAsync={loadApplication}
      onFinish={() => setIsReady(true)}
      onError={console.warn} />
    );
  };

  return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/PhotoBG.png')} style={styles.image}>
            <RegistrationScreen />
         
            <StatusBar style="auto" />
            
          </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "flex-end",
    alignItems: 'center',
  },
});
