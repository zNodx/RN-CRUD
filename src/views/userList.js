import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import UsersContext from '../context/UserContext';
import { Button, ListItem } from 'react-native-elements';
import {AntDesign } from '@expo/vector-icons';

const UserList = ({navigation}) => {

  const {state, dispatch} = useContext(UsersContext);
  
  const confirmUserDeletion = (user) => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário',
    [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          })
        }
      },{
        text: 'Não'
      }
    ])
  }

  const getActions = (user) => {
    return (
      <>
      <Button
        onPress={() => navigation.navigate('UserForm', user)}   
        type="clear"
        icon={<AntDesign name="edit" size={25} color='orange'/>}
      />
      <Button
        onPress={() => confirmUserDeletion(user)}   
        type="clear"
        icon={<AntDesign name="delete" size={25} color='red'/>}
      />
      </>
    )
  }


  const  getUserItem = ({item:user})  => <ListItem 
                                            leftAvatar={{source: {uri: user.avatarUrl}}}
                                            key={user.id.toString()}
                                            title={user.name}
                                            subtitle={user.email}
                                            bottomDivider
                                            rightElement={getActions(user)}
                                            onPress={() => navigation.navigate('UserForm', user)}
                                          />
  
  

  return (
    <View>
      <FlatList
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  )
  
}

export default UserList

const styles = StyleSheet.create({})