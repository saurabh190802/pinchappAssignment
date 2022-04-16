import React, { useState } from 'react';
import { View, Text, StyleSheet,KeyboardAvoidingView, SafeAreaView,ScrollView } from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLable from '../../Components/TextInputWithLabel';

import validator from '../../utils/validations';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';



const Signup = ({ navigation }) => {

    const [state, setState] = useState({
        isLoading: false,
        fName:'',
        lName:'',
        userName: '',
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, userName,fName,lName, email, password, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))


    const isValidData = () => {
        const error = validator({
            userName,
            fName,
            lName,
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onSignup = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                const res = await actions.signup({
                    userName,
                    fName,
                    lName,
                    email,
                    password
                })
                console.log("res of signup==>>>>>", res)
                showMessage("Registered successfully...!!!!")
                updateState({ isLoading: false })
                navigation.goBack()
            } catch (error) {
                console.log("error raised")
                showError(error.message)
                updateState({ isLoading: false })
            }
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
            <ScrollView>
            <TextInputWithLable
                label="User name"
                placheHolder="enter your user name"
                onChangeText={(userName) => updateState({ userName })}
            />
             <TextInputWithLable
                label="First name"
                placheHolder="enter your first name"
                onChangeText={(fName) => updateState({ fName })}
            />
             <TextInputWithLable
                label="Last name"
                placheHolder="enter your last name"
                onChangeText={(lName) => updateState({ lName })}
            />
            <TextInputWithLable
                label="Email"
                placheHolder="enter your email"
                onChangeText={(email) => updateState({ email })}
            />
            <TextInputWithLable
                label="Password"
                placheHolder="enter your password"
                // isSecure={isSecure}
                secureTextEntry={isSecure}
                onChangeText={(password) => updateState({ password })}
            />

            <ButtonWithLoader
                text="Signup"
                onPress={onSignup}
                isLoading={isLoading}
            />
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    },
});


export default Signup;
