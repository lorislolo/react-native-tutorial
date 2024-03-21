import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListUser from './screens/ListUser';
import Cadastrar from './screens/Cadastrar';
import Editar from './screens/Editar';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={ListUser} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  }
})