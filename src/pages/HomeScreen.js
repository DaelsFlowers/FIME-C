import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import MyImageButton from './components/MyImageButton';
import { DatabaseConnection } from '../database/database-connection';
import { Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Pie from "react-native-pie"


import CarteraIco from "./../../images/ico/cartera.png"
import ConfigIco from "./../../images/ico/config.png"
import HistorialIco from "./../../images/ico/historial.png"
import InfoIco from "./../../images/ico/info.png"
import PerfilIco from "./../../images/ico/perfil.png"

import logo from "../../images/logo.png"
import BackIco from "../../images/BackIco.png"
const db = DatabaseConnection.getConnection();

const Data = [
  { percentage: 40, color: "#adfdea" },
  { percentage: 40, color: "#a00dea" },
  { percentage: 20, color: "#3a0df0" },
]


const HomeScreen = ({ navigation }) => {
  var Total = "000.00";



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ backgroundColor: "#000", width: "100%", height: 90, alignItems: 'center', justifyContent: "center" }}>
        <Image source={logo} style={{ width: 200, height: 75, resizeMode: "stretch", marginTop: 15 }} />
        {/* <TouchableOpacity style={{ position: "absolute", left: 0, margin: 20 }} onPress={() => navigation.goBack()}>
          <Image source={BackIco} style={{ width: 60, height: 40, resizeMode: "stretch" }} />
        </TouchableOpacity> */}
      </View>
      <ScrollView>
        <View style={{ margin: 10 }}>

          {/* total de dinero */}
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 36, fontWeight: "600" }}>TOTAL: ${Total}</Text>
          </View>

          {/* line */}
          <View style={{ width: "100%", height: 2, backgroundColor: "#999", marginVertical: 20 }} />

          {/* buttons */}
          <View style={{ alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <View>
              <TouchableOpacity onPress={() => { console.log("a"); }}>
                <LinearGradient
                  colors={['#1E7B1C', '#1A4D19']}
                  style={{ alignItems: 'center', justifyContent: 'center', margin: 5, height: 50, width: 175 }}>
                  <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 24, }}>INGRESOS</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => { console.log("a"); }}>
                <LinearGradient
                  colors={['#951717', '#6B2828']}
                  style={{ alignItems: 'center', justifyContent: 'center', margin: 5, height: 50, width: 175 }}>
                  <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 24, }}>EGRESOS</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* grafica */}
          <View>
            <Pie
              sections={Data}
              radius={80}
              innerRadius={60}
            />
          </View>






          {/* <View style={{ flex: 1 }}>

              <MyImageButton
                title="Registrar Usuário"
                btnColor='#2992C4'
                btnIcon="user-plus"
                customClick={() => navigation.navigate('Register')}
              />

              <MyImageButton
                title="Atualizar Usuário"
                btnColor='#A45BB9'
                btnIcon="user-circle"
                customClick={() => navigation.navigate('Update')}
              />

              <MyImageButton
                title="Visualizar Usuário"
                btnColor='#F9AD29'
                btnIcon="user"
                customClick={() => navigation.navigate('View')}
              />
              <MyImageButton
                title="Visualizar Todos"
                btnColor='#384F62'
                btnIcon="users"
                customClick={() => navigation.navigate('ViewAll')}
              />
              <MyImageButton
                title="Excluir Usuário"
                btnColor='#D1503A'
                btnIcon="user-times"
                customClick={() => navigation.navigate('Delete')}
              />
            </View> */}

        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Image source={CarteraIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Ejercicios')}>
          <Image source={HistorialIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Informacion')}>
          <Image source={InfoIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Historial')}>
          <Image source={PerfilIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Image source={ConfigIco} style={styles.iconos} />
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#3A3131"
  },
  contenido: {
    margin: 20,
    marginTop: 30,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 55,
    color: "#fff",
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 28,
    color: "#fff",
    fontWeight: 'bold',
    marginTop: 10,
  },
  navbar: {
    backgroundColor: "#DADADA",
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  iconos: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 14,
  },
  categoria: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    marginTop: 10,
  },
  imagenes: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
    marginBottom: 20,
  },
  home: {
    borderRadius: 10,
    backgroundColor: "#615858",
    padding: 10,
  }
})