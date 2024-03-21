import { View, Text, StyleSheet } from 'react-native'


const Cadastrar = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Cadastrar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
    }
}) 

export default Cadastrar