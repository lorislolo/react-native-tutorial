import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.bolinha}></View>
      <Text style={styles.texto}>Lorena Marques</Text>
      <StatusBar style="auto" />

      
    </View>
    <View style={styles.menu}>
     <Text style={styles.texto}> Ocean Ocean </Text>
     <StatusBar style="auto" />
    </View>
    <View style={styles.rodape}>
     <Text style={styles.texto}>Copy 2024 </Text>
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
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#24b5c6',
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
  texto:{
    color: '#E6E8FA',
    fontSize: 30,
  },
  menu: {
    flex: 4,
    backgroundColor: '#CCFFFF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
   rodape: {
    flex: 1,
    backgroundColor: '#24b5c6',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 20,
  }
});
