import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from "react-native";

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
        <View>
            <Text>Регистрация</Text>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput placeholder={'Логин'}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
                value={state.login}
                onFocus={() => setIsShowKeybord(true)} />
            <TextInput placeholder={'Адресс электронной почты'}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                value={state.email}
                onFocus={() => setIsShowKeybord(true)} />
            <TextInput placeholder={'Пароль'}
                secureTextEntry={true}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                value={state.password}
                onFocus={() => setIsShowKeybord(true)} />
            </KeyboardAvoidingView>
            <TouchableOpacity activeOpacity={0.5} onPress={keyboardHide}><Text>Зарегистрироваться</Text></TouchableOpacity>
            <TouchableOpacity><Text>Уже есть аккаунт? Войти</Text></TouchableOpacity>
        </View>
    )
}