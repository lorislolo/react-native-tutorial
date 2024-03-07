import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.bolinha}>
          <Image source={require('../assets/helloKitty.jpeg')} style={styles.imageBackground}></Image>
        </View>
        <Text style={styles.texto}>Hello Kitty Cozinheira</Text>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
   imageBackground: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#b23643',
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
    color: '#f3f3f3',
    fontSize: 30,
  },
  titulo: {
    fontSize: 40,
    color: '#f3f3f3'  },
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

export default Header