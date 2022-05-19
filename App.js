import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/pages/HomeScreen';
import RegisterUser from './src/pages/RegisterUser';
import UpdateUser from './src/pages/UpdateUser';
import ViewUser from './src/pages/ViewUser';
import ViewAllUser from './src/pages/ViewAllUser';
import DeleteUser from './src/pages/DeleteUser';


import Login from './src/pages/Login';
import Register from './src/pages/Register';


const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register', //Set Header Title
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

const Index = () => {

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterUser}
        options={{
          title: 'Cadastrar Usuário',
          headerStyle: {
            backgroundColor: '#2992C4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      />
      <Stack.Screen
        name="Update"
        component={UpdateUser}
        options={{
          title: 'Atualizar Usuário',
          headerStyle: {
            backgroundColor: '#A45BB9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="View"
        component={ViewUser}
        options={{
          title: 'Visualizar Usuário',
          headerStyle: {
            backgroundColor: '#F9AD29',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ViewAll"
        component={ViewAllUser}
        options={{
          title: 'Visualizar Todos os Usuários',
          headerStyle: {
            backgroundColor: '#384F62',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Delete"
        component={DeleteUser}
        options={{
          title: 'Excluir Usuário',
          headerStyle: {
            backgroundColor: '#D1503A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>

  );
};



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;