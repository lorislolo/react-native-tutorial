import { StyleSheet, View, FlatList, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import H1 from './ui/H1.js';
import CardUser from './CardUser.js';
import { useEffect, useState } from 'react'


const Body = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const result = await fetch('https://backend-api-express-i1oj.onrender.com/user')
            const data = await result.json()
            console.log(data.success)
            setUsers(data.users)
        } catch (error) {
            console.log('Error getUsers ' + error.message)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    

    return (
        <View style={styles.menu}>
            <LinearGradient
                colors={['#b23643', '#b22a39', '#a4003d']} style={styles.menu}
            >
                <View>
                    
                </View>
                <H1 title="Meus usuários" />
                <View style={styles.listUser}>
                    {users.length ?
                        <FlatList
                            data={users}
                            renderItem={({ item }) => <CardUser user={item} />}
                            keyExtractor={item => item.id}
                        /> :
                        <Text style={{ color: '#FFF' }}>Loading...</Text>}
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
    menu: {
        flex: 4,
        backgroundColor: '#f2ced8',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listUser: {
        height: 'auto',
        width: "100%",
        alignItems: 'center'
    }
});

export default Body;