import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Login } from '../Screens'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthStack