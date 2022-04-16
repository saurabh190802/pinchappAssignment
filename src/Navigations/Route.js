import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { getUserData } from '../utils/utils';

const Stack = createStackNavigator();


export default function Routes() {
const userData = useSelector((state)=> state.auth.userData)
// const userData = getUserData()

console.log("user data",userData)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                 {!!userData && userData?.token ? MainStack(Stack)
                    : AuthStack(Stack)
                } 
                
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}