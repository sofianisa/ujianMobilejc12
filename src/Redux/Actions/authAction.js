import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const getData = () => {
    return async dispatch => {
        try {
            let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=12',
                { headers:{ " X-Api-Key" : "d265e9fd-f1b0-4ccf-805a-ca4faaf1cd10" }}
            )
            
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}

export const loginAction = (data) => {
    console.log(data)
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            await AsyncStorage.setItem('username', JSON.stringify(data))
        } catch (error) {
            
        }
    }
}

export const keepLogin = () => {
    return async dispatch => {
        try {
            let data = await AsyncStorage.getItem('username')
            data = JSON.parse(data)
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const imageAction = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'IMAGE',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const logoutAction = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'logout'
            })

        } catch (error) {
            
        }
    }
}