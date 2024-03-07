import { Text, StyleSheet} from 'react-native'

const H4 = ({title, children}) => {
  return (
    <Text style = {styles.h4}>{children}</Text>
  )
}


const styles = StyleSheet.create({
     h4: {
        fontSize: 20,
        color: '#8c2641'
    }
})
export default H4
