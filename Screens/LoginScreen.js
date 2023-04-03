import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const initialState = {
    email: '',
    password: ''
};

export const LoginScreen = ({navigation}) => {
    const [state, setState] = useState(initialState);
    const [isShowKeyBord, setIsShowKeybord] = useState(false);

    const keyboardHide = () => {
        console.log(state);
        setIsShowKeybord(false);
        Keyboard.dismiss();
        setState(initialState);
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <ImageBackground source={require('../assets/PhotoBG.png')} style={styles.image}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
            <Text style={styles.title}>Войти</Text>
            
                <TextInput placeholder={'Адрес электронной почты'}
                    onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                    value={state.email}
                    onFocus={() => setIsShowKeybord(true)}
                    style={styles.input} />
                <TextInput placeholder={'Пароль'}
                    secureTextEntry={true}
                    onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                    value={state.password}
                    onFocus={() => setIsShowKeybord(true)}
                    style={styles.input}/>

            <TouchableOpacity activeOpacity={0.5} onPress={keyboardHide} style={styles.button}><Text style={styles.textButton}>Войти</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ ...styles.link, marginBottom: isShowKeyBord ? 16 : 144 }}>Нет аккаунта? Зарегистрироваться</Text></TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            </ImageBackground>
            </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        minWidth: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,
    },
    image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  title: {
    fontSize:30,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 32,
      marginBottom: 32,
      fontFamily: 'Roboto-Medium',
    },
  input: {
    padding: 16,
      backgroundColor: '#f6f6f6',
      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
    fontFamily: 'Roboto-Regular',
    },
    button: {
        backgroundColor: '#ff6c00',
        borderRadius: 100,
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 42,
    },
    textButton: {
        padding: 16,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 19,
        fontFamily: 'Roboto-Regular',
    },
    link: {
        fontSize: 16,
        color: '#1b4371',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
    }
});