import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import H1 from './ui/H1.js';
import CardUser from './CardUser.js';

const Content = () => {
    return (
        <View style={styles.menu}>
            <LinearGradient
                colors={['#b23643', '#b22a39', '#a4003d']} style={styles.menu}
            >
                <H1 title="Meus usuários"/>
               <CardUser name="Hello Kitty" email="kittycozinha@email.com" avatar="../assets/helloKitty.jpeg"/>
               <CardUser name="Kitty Maromba" email="marombinha@email.com" avatar="../assets/helloKittyMaromba.jpg"/>
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
    }
});

export default Content;