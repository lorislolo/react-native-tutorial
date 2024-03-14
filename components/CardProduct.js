import {View, StyleSheet, Text} from 'react-native'
import H4 from './ui/H4.js'
import { Image } from 'expo-image'

const CardProduct = ({product}) => {
  return (
   <View style={styles.card}>
        <View style={styles.image}>
            <Image style={styles.avatarImg} source={product.image}/>
        </View>
        <View>
            <H4>{product.name}</H4>
            <Text style={styles.price}> {product.price} </Text>
            <Text style={styles.quantity}> {product.quantity} </Text>
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
    quantity: {
        color: '#8c2641'
    }
})
export default CardProduct
