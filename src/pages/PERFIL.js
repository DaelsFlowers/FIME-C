import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../images/logo.png"
import BackIco from "../../images/BackIco.png"
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown'


const PERFIL = ({ navigation }) => {
  const tipo = ["DEPOSITO", "EFECTIVO"]
  const frecuencia = ["UNICA OCACION", "DIARIO", "SEMANAL", "CADA 15 DIAS", "MENSUAL"]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ backgroundColor: "#000", width: "100%", height: 90, alignItems: 'center', justifyContent: "center" }}>
        <Image source={Logo} style={{ width: 200, height: 75, resizeMode: "stretch", marginTop: 15 }} />
        <TouchableOpacity style={{ position: "absolute", left: 0, margin: 10 }} onPress={() => navigation.goBack()}>
          <Image source={BackIco} style={{ width: 60, height: 40, resizeMode: "stretch", marginTop: 20 }} />
        </TouchableOpacity>
      </View>
      <ScrollView  >
        <Text style={{ fontSize: 42, fontWeight: '800', textAlign: "center" }}>PERFIL</Text>
        <View style={styles.content2}>
          {/* NOMBRE */}
          <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>NOMBRE:</Text>
          <TextInput style={styles.input}
            keyboardType="default" />

          {/* CORREO */}
          <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>CORREO:</Text>
          <TextInput style={styles.input}
            keyboardType="default" />

          {/* TELEFONO */}
          <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>TELEFONO:</Text>
          <TextInput style={styles.input}
            keyboardType="default" />
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={{ marginVertical: 10, alignSelf: 'center', marginTop: 250 }}>
          <LinearGradient
            colors={['#951717', '#6B2828']}
            style={{ alignItems: 'center', justifyContent: 'center', margin: 5, height: 50, width: 175 }}>
            <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 24, }}>SALIR</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PERFIL;


const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlign: "center",
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  content2: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 7,
  },
  drop: {
    marginVertical: 10,
    width: 330,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  }
});