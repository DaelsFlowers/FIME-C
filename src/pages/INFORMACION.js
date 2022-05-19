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


const INFORMACION = ({ navigation }) => {
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
        <Text style={{ fontSize: 42, fontWeight: '800', textAlign: "center" }}>INFORMACION</Text>
        <View style={styles.content2}>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('AhorrarScreen')}>
            <Text style={styles.infotitle}>¿POR QUÉ ES IMPORTANTE AHORRAR?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('EmpezarScreen')}>
            <Text style={styles.infotitle}>¿CÓMO EMPEZAR A INVERTIR?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('BeneficiosScreen')}>
            <Text style={styles.infotitle}>BENEFICIOS DE CONTRATAR UN SEGURO DE VIDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('BancaScreen')}>
            <Text style={styles.infotitle}>¿CÓMO FUNCIONA LA BANCA DIGITAL?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('FijosScreen')}>
            <Text style={styles.infotitle}>¿QUE SON LOS GASTOS FIJOS?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('VariablesScreen')}>
            <Text style={styles.infotitle}>¿QUE SON LOS GATOS VARIABLES?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('CreditoScreen')}>
            <Text style={styles.infotitle}>¿QUE ES UNA TARJETA DE CREDITO?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info} onPress={() => navigation.navigate('SATScreen')}>
            <Text style={styles.infotitle}>QUE ES EL SAT?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default INFORMACION;


const styles = StyleSheet.create({
  content2: {
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
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
  info: {
    width: "90%",
    height: 60,
    backgroundColor: "#9D9D9D",
    marginVertical: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 7,
  },
  infotitle: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 20,
  }
});