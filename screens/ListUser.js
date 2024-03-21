import {StyleSheet, View } from 'react-native';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Body from '../components/Body.js';

const ListUser = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
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

export default ListUser