import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useContext, useState} from 'react'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UserContext'

const UserForm = ({route, navigation}) => {
  const {dispatch} = useContext(UsersContext)

  const [user, setUser] = useState(route.params ? route.params : {})
  return (
    <View style={styles.form}>
      <Text>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={name => setUser({...user, name})}
          placeholde='informe o nome'
          value={user.name}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => setUser({...user, email})}
          placeholde='informe o nome'
          value={user.email}
        />
        <Text>URL do avatar</Text>
        <TextInput
          style={styles.input}
          onChangeText={avatarUrl => setUser({...user, avatarUrl})}
          placeholde='informe o nome'
          value={user.avatarUrl}
        />
        <Button
          title='Salvar'
          onPress={
            () => {
              dispatch({
                type: user.id ? 'updateUser' : 'createUser',
                payload: user,
              })
              navigation.goBack()
            }
          }
        />
    </View>
  )
}

export default UserForm

const styles = StyleSheet.create({
  form: {
    padding: 10
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    margin: 10,
    padding: 5
  }
})