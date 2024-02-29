import {StyleSheet, View } from 'react-native';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Content/>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  }
})