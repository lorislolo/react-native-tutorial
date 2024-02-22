import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bolinha}>
          <Image source={require('./assets/helloKitty.jpeg')} style={styles.imageBackground}></Image>
        </View>
        <Text style={styles.texto}>Hello Kitty Cozinheira</Text>
        <StatusBar style="auto" />
      </View>
    )
}

export default Header