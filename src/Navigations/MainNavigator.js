import React, { useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNavigation from './TabNavigation'
import { keepLogin } from '../Redux/Actions/authAction'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

const MainNavigation = () => {
    let username = useSelector(state => state.auth.username)
    let dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.getItem('username')
        .then(res => {
            dispatch(keepLogin(res))
        })
        .catch(err => {
            console.log(err)
        })
    }, [dispatch])

    return (
        <NavigationContainer>
            { username
                ?
                <TabNavigation />
                :
                <AuthStack />
            }
        </NavigationContainer>
    )
}

export default MainNavigation