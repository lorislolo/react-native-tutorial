import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> apenas os melhores of brazil</Text>
      <Text style={styles.texto2}>don melhor que o mac</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: '#fff',
  },
  texto: {
    color: '#a0a0a0',
    fontSize: 40,
  },
  texto2: {
    color: '#d6d6d6',
    fontSize: 40,
    backgroundColor: '#a1a1a1',
    textDecorationColor: '#fff',
  }
});
