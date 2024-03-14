import { StyleSheet, View, FlatList, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import H1 from './ui/H1.js';
import CardUser from './CardUser.js';
import { useEffect, useState } from 'react'
import CardProduct from './CardProduct.js';


const Content = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            const result = await fetch('https://backend-api-express-i1oj.onrender.com/user')
            const data = await result.json()
            console.log(data.success)
            setUsers(data.users)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])

    const [products, setProducts] = useState([])
    const getProducts = async () => {
        try {
            const result = await fetch('https://backend-api-express-i1oj.onrender.com/product')
            const data = await result.json()
            console.log(data.success)
            setProducts(data.products)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <View style={styles.menu}>
            <LinearGradient
                colors={['#b23643', '#b22a39', '#a4003d']} style={styles.menu}
            >
                <H1 title="Meus usuários" />
                <View style={styles.listUser}>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => <CardUser user={item} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>

                <H1>Produtos</H1>
                <View style={styles.listUser}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <CardProduct product={item} />}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                    />
                </View>
            </LinearGradient>
            <StatusBar style="auto" />

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    imageBackground: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffd2d2',
        alignItems: 'center',
        flexDirection: 'row',
    },
    bolinha: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginHorizontal: 10,
    },
    texto: {
        color: '#8c2641',
        fontSize: 30,
    },
    menu: {
        flex: 4,
        backgroundColor: '#f2ced8',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rodape: {
        flex: 1,
        backgroundColor: '#faacc4',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    listUser: {
        height: 120
    }
});

export default Content;