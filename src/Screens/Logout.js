import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button } from 'react-native-elements'

const Logout = () => {
    let dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View>
                <Button title="LOGOUT"
                    containerStyle={{ alignItems: 'center'}}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '55%'
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Logout