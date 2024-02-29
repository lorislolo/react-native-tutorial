import {View, StyleSheet, Text} from 'react-native'
import H4 from './ui/H4.js'
import { Image } from 'expo-image'

const CardUser = ({name, email, avatar}) => {
  return (
   <View style={styles.card}>
        <View style={styles.avatar}>
            <Image style={styles.avatarImg} source={avatar}/>
        </View>
        <View>
            <H4>{name}</H4>
            <Text style={styles.email}> {email} </Text>
        </View>
   </View>
  )
}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 5
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
