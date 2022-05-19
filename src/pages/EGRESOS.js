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


const EGRESOS = ({ navigation }) => {
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
        <Text style={{ fontSize: 42, fontWeight: '800', textAlign: "center" }}>EGRESOS</Text>
        <View style={styles.content2}>
          {/* TITULO */}
          <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>TITULO</Text>
          <TextInput style={styles.input}
            keyboardType="default" />

          {/* MONTO */}
          <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>MONTO</Text>
          <TextInput style={styles.input}
            placeholder="$"
            keyboardType="numeric" />

          {/* TITULO */}
          <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>TIPO DE ENGRESO</Text>
          <View style={{ alignItems: "center" }}>
            <SelectDropdown
              data={tipo}
              buttonStyle={styles.drop}
              defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          </View>
          {/* TITULO */}
          <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>FRECUENCIA</Text>
          <View style={{ alignItems: "center" }}>
            <SelectDropdown
              data={frecuencia}
              buttonStyle={styles.drop}
              defaultValueByIndex={0}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          </View>

          <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={{ marginVertical: 10 }}>
              <LinearGradient
                colors={['#1E7B1C', '#1A4D19']}
                style={{ alignItems: 'center', justifyContent: 'center', margin: 5, height: 50, width: 175 }}>
                <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 24, }}>ACEPTAR</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={{ marginVertical: 10 }}>
              <LinearGradient
                colors={['#951717', '#6B2828']}
                style={{ alignItems: 'center', justifyContent: 'center', margin: 5, height: 50, width: 175 }}>
                <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 24, }}>CANCELAR</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EGRESOS;


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