import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/pages/HomeScreen';
import INGRESOS from './src/pages/INGRESOS';
import EGRESOS from './src/pages/EGRESOS';
import EDITOR from './src/pages/EDITOR';
import GASTOS from './src/pages/GASTOS';
import HISTORIAL from './src/pages/HISTORIAL';
import INFORMACION from './src/pages/INFORMACION';
import PERFIL from './src/pages/PERFIL';
import CONFIGURACION from './src/pages/CONFIGURACION';
import UpdateUser from './src/pages/UpdateUser';
import ViewUser from './src/pages/ViewUser';
import ViewAllUser from './src/pages/ViewAllUser';
import DeleteUser from './src/pages/DeleteUser';


import Login from './src/pages/Login';
import Register from './src/pages/Register';

import AhorrarScreen from './src/pages/InformacionScreens/AhorrarScreen';
import EmpezarScreen from './src/pages/InformacionScreens/EmpezarScreen';
import BeneficiosScreen from './src/pages/InformacionScreens/BeneficiosScreen';
import BancaScreen from './src/pages/InformacionScreens/BancaScreen';
import FijosScreen from './src/pages/InformacionScreens/FijosScreen';
import VariablesScreen from './src/pages/InformacionScreens/VariablesScreen';
import CreditoScreen from './src/pages/InformacionScreens/CreditoScreen';
import SATScreen from './src/pages/InformacionScreens/SATScreen';

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

const InfoScreens = () => {
  return (
    <Stack.Navigator initialRouteName="InformacionScreen">
      <Stack.Screen
        name="InformacionScreen"
        component={INFORMACION}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AhorrarScreen"
        component={AhorrarScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EmpezarScreen"
        component={EmpezarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BeneficiosScreen"
        component={BeneficiosScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BancaScreen"
        component={BancaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FijosScreen"
        component={FijosScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VariablesScreen"
        component={VariablesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreditoScreen"
        component={CreditoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SATScreen"
        component={SATScreen}
        options={{ headerShown: false }}
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
        name="INGRESOS"
        component={INGRESOS}
        options={{
          headerShown: false,
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
        name="EGRESOS"
        component={EGRESOS}
        options={{
          headerShown: false,
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
        name="EDITOR"
        component={EDITOR}
        options={{
          headerShown: false,
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
        name="GASTOS"
        component={GASTOS}
        options={{
          headerShown: false,
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
        name="HISTORIAL"
        component={HISTORIAL}
        options={{
          headerShown: false,
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
        name="INFORMACION"
        component={InfoScreens}
        options={{
          headerShown: false,
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
        name="PERFIL"
        component={PERFIL}
        options={{
          headerShown: false,
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
        name="CONFIGURACION"
        component={CONFIGURACION}
        options={{
          headerShown: false,
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