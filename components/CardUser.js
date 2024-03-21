import {View, StyleSheet, Text} from 'react-native'
import H4 from './ui/H4.js'
import { Image } from 'expo-image'

const CardUser = ({user}) => {
  return (
   <View style={styles.card}>
        <View style={styles.avatar}>
            <Image style={styles.avatarImg} source={user.avatar}/>
        </View>
        <View>
            <H4>{user.name}</H4>
            <Text style={styles.email}> {user.email} </Text>
        </View>
   </View>
  )
}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 310,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 5,
        marginVertical: 10,
        marginHorizontal:10
    },
    avatar: {
        marginHorizontal: 10
    },
    avatarImg: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    email: {
        color: '#8c2641'
    }
})
export default CardUser
