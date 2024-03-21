import { StyleSheet, View, FlatList, Text, TextInput } from 'react-native';
import Button from './ui/Button.js'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import H1 from './ui/H1.js';
import CardUser from './CardUser.js';
import { useEffect, useState } from 'react'
import CardProduct from './CardProduct.js';


const BodyExemplos = () => {
    const [txtName, setTxtName] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtAvatar, setTxtAvatar] = useState('')

    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    const [counter, setCounter] = useState(0)

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

    const getProducts = async () => {
        try {
            const result = await fetch('https://backend-api-express-i1oj.onrender.com/product')
            const data = await result.json()
            console.log(data.success)
            setProducts(data.products)
        } catch (error) {
            console.log('Error getProducs ' + error.message)
        }
    }

    const postUser = async () =>{
        try{
          const result = await fetch('https://backend-api-express-i1oj.onrender.com/user', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
              },
            body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
          })
          const data = await result.json()
          console.log(data)
          getUsers()
        } catch (error){
          console.log('Error postUser ' +error.message)
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
                <TextInput 
          style={styles.input}
          onChangeText={setTxtName}
          value={txtName}
          placeholder='Nome'
        />
        <TextInput 
          style={styles.input}
          onChangeText={setTxtEmail}
          value={txtEmail}
          placeholder='Email'
        />
        <TextInput 
          style={styles.input}
          onChangeText={setTxtAvatar}
          value={txtAvatar}
          placeholder='Foto de Perfil'
        />
        <Button 
          title="Cadastrar Usuário"
          onPress={postUser}
        />
                <H1 title="Meus usuários" />
                <View style={styles.listUser}>
                    {users.length ?
                        <FlatList
                            data={users}
                            renderItem={({ item }) => <CardUser user={item} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        /> :
                        <Text style={{ color: '#FFF' }}>Loading...</Text>}
                </View>

                <H1>Produtos</H1>
                <View style={styles.listUser}>
                    {
                        products.length ?
                            <FlatList
                                data={products}
                                renderItem={({ item }) => <CardProduct product={item} />}
                                keyExtractor={item => item.id}
                                
                            />
                            
                            :
                            <Text style={{ color: '#FFF' }}>Loading...</Text>
                    }
                    
                </View>
                <Button
                                title="Add +1"
                                onPress={() => setCounter(counter +1)}
                                />
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
        height: 120,
        width: "100%"
    },
input: {
  height: 40,
  width: 300,
  backgroundColor: '#FFF',
  margin: 12,
  borderWidth: 1,
  padding: 10,
}
});

export default BodyExemplos;