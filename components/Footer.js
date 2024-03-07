import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const Footer = () => {
    return(
<View style={styles.rodape}>
        <Text style={styles.texto}> Kitty Copy 2024 </Text>
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
      color: '#f3f3f3',
      fontSize: 30,
    },
    titulo: {
      fontSize: 40,
      color: '#f3f3f3'    },
    menu: {
      flex: 4,
      backgroundColor: '#f2ced8',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rodape: {
      flex: 1,
      backgroundColor: '#a4003d',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      paddingBottom: 20,
    }
  });

export default Footer