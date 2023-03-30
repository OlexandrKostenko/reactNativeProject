import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { LoginScreen } from './Screens/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <LoginScreen/>
      <StatusBar style="auto" />
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
