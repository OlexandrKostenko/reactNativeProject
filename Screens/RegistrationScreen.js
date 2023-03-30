import { useState } from "react";
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";


const initialState = {
    email: '',
    login: '',
    password: ''
};



export const RegistrationScreen = () => {
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
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
            <Text style={styles.title}>Регистрация</Text>
            
                <TextInput placeholder={'Логин'}
                    onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
                    value={state.login}
                    style={styles.input}
                    onFocus={() => setIsShowKeybord(true)} />
                <TextInput placeholder={'Адресс электронной почты'}
                    onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                    value={state.email}
                    style={styles.input}
                    onFocus={() => setIsShowKeybord(true)} />
                <TextInput placeholder={'Пароль'}
                    secureTextEntry={true}
                    onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                    value={state.password}
                    style={styles.input}
                    onFocus={() => setIsShowKeybord(true)} />
            
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={keyboardHide}><Text style={styles.textButton}>Зарегистрироваться</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{ ...styles.link, marginBottom: isShowKeyBord ? 16 : 78 }}>Уже есть аккаунт? Войти</Text></TouchableOpacity>
                
            </View>
            </KeyboardAvoidingView>
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
  title: {
    fontSize:30,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 92,
      marginBottom: 32,
      fontFamily: 'Roboto-Medium'
    },
  input: {
    padding: 16,
      backgroundColor: '#f6f6f6',
      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
    },
    button: {
        backgroundColor: '#ff6c00',
        borderRadius: 100,
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 26,
    },
    textButton: {
        padding: 16,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 19,
    },
    link: {
        fontSize: 16,
        color: '#1b4371',
        textAlign: 'center',
    }
});