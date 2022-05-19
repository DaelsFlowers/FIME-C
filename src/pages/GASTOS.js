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


const GASTOS = ({ navigation }) => {
  const tipo = ["DEPOSITO", "EFECTIVO"]
  const frecuencia = ["UNICA OCACION", "DIARIO", "SEMANAL", "CADA 15 DIAS", "MENSUAL"]

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ backgroundColor: "#000", width: "100%", height: 90, alignItems: 'center', justifyContent: "center" }}>
        <Image source={Logo} style={{ width: 200, height: 75, resizeMode: "stretch", marginTop: 15 }} />
        <TouchableOpacity style={{ position: "absolute", left: 0, margin: 10 }} onPress={() => navigation.goBack()}>
          <Image source={BackIco} style={{ width: 60, height: 40, resizeMode: "stretch", marginTop: 20 }} />
        </TouchableOpacity>
      </View>
      <ScrollView  >
        <Text style={{ fontSize: 42, fontWeight: '800', textAlign: "center", marginTop: 10 }}>MOVIMIENTOS</Text>
        <View style={{ width: "90%", height: 2, backgroundColor: "#999", marginVertical: 20, alignSelf: "center" }} />
        <Text style={{ fontSize: 20, fontWeight: '400', textAlign: "center" }}>DE:  {date}-{month - 1}-{year}  A:  {date}-{month}-{year} </Text>
        <View style={styles.content2}>
          <Text style={{ fontSize: 24, fontWeight: '600', textAlign: "center", marginTop: 10 }}>INGRESOS</Text>
          {/* codigo de lista auto */}
          <Text style={{ fontSize: 24, fontWeight: '600', textAlign: "center", marginTop: 10 }}>EGRESOS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GASTOS;


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
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