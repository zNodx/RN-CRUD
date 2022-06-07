import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import UserForm from './src/views/userForm';
import UserList from './src/views/userList';
import { UsersProvider } from './src/context/UserContext';
import { Button } from 'react-native-elements';
import {AntDesign } from '@expo/vector-icons';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <UsersProvider>
      <Stack.Navigator 
      initialRouteName='UserList' screenOptions={screenOptions} >
        <Stack.Screen name="UserList" component={UserList} 
          options={({navigation}) => {
            return {
              title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear'
                    icon= {<AntDesign name='rightcircleo' size={25} color={'#fff'} /> }
                  />
                )
            }
          }
          }
        />
        <Stack.Screen name="UserForm" component={UserForm} 
          options={{
            title: 'Formulário de Usuários'
          }}
        />
      </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
}