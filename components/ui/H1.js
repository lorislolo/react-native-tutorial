import { Text, StyleSheet} from 'react-native'

const H1 = ({title, children}) => {
  return (
    <Text style = {styles.h1}>{title}</Text>
  )
}


const styles = StyleSheet.create({
     h1: {
        fontSize: 30,
        fontWeigth: 'bold',
        color: '#f3f3f3'
    }
})
export default H1
