import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const Profile = () => {
    let {username} = useSelector(state => state.auth.username)
    let image = useSelector(state => state.auth.image)
    console.log(image)
    return (
        <View style={styles.container}>
            { image?
                <View>
                    <Image source={{ uri: image }}
                    style={styles.image}
                    />
                </View>
                :
                <View>
                <Image source={require('../image/defaultpicture.jpg')}
                style={styles.image} />
                </View>
            }
            <Text>{username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'grey'
    },
    image: {
        borderWidth: 2,
        borderRadius: 150,
        width: 148,
        height: 150,
    }
})

export default Profile