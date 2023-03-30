import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const initialState = {
    email: '',
    password: ''
};
export const LoginScreen = () => {
    const [state, setState] = useState(initialState);
    const [isShowKeyBord, setIsShowKeybord] = useState(false);

    const keyboardHide = () => {
        console.log(state);
        setIsShowKeybord(false);
        Keyboard.dismiss();
        setState(initialState);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Войти</Text>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            </KeyboardAvoidingView>
            <TouchableOpacity activeOpacity={0.5} onPress={keyboardHide} style={styles.button}><Text style={styles.textButton}>Войти</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text></TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
  },
  title: {
    fontSize:30,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 32,
      marginBottom: 32,
    },
  input: {
    padding: 16,
      backgroundColor: '#f6f6f6',
      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 8,
    margin: 16,
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
    },
    link: {
        fontSize: 16,
        color: '#1b4371',
        textAlign: 'center',
        marginBottom: 144,
    }
});