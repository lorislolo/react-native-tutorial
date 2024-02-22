import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header  from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bolinha}>
          <Image source={require('./assets/helloKitty.jpeg')} style={styles.imageBackground}></Image>
        </View>
        <Text style={styles.texto}>Hello Kitty Cozinheira</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.menu}>
        <LinearGradient
          colors={['#ffd2d2', '#ffc3c3', '#faacc4']} style={styles.menu}
        >
          <Text style={styles.titulo}> Receita de bolo da Kitty </Text>
        </LinearGradient>
        <StatusBar style="auto" />
      </View>
      <View style={styles.rodape}>
        <Text style={styles.texto}> Kitty Copy 2024 </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
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
  titulo: {
    fontSize: 40,
    color: '#f3f3f3',
    fontWeight: 100,
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
