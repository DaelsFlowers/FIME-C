import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from 'react-native-chart-kit';


import CarteraIco from "./../../images/ico/cartera.png"
import ConfigIco from "./../../images/ico/config.png"
import HistorialIco from "./../../images/ico/historial.png"
import InfoIco from "./../../images/ico/info.png"
import PerfilIco from "./../../images/ico/perfil.png"

import logo from "../../images/logo.png"

const HomeScreen = ({ navigation }) => {
  var Total = 1000;
  var consumido = 100;
  var totalAux = Total - consumido;


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
              <TouchableOpacity onPress={() => { navigation.navigate('INGRESOS') }} >
                <LinearGradient
                  colors={['#1E7B1C', '#1A4D19']}
                  style={{ alignItems: 'center', justifyContent: 'center', margin: 5, height: 50, width: 175 }}>
                  <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 24, }}>INGRESOS</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => { navigation.navigate('EGRESOS') }} >
                <LinearGradient
                  colors={['#951717', '#6B2828']}
                  style={{ alignItems: 'center', justifyContent: 'center', margin: 5, height: 50, width: 175 }}>
                  <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 24, }}>EGRESOS</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* grafica */}
          <View style={styles.content2}>
            <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "700" }}>GRAFICA DE GASTOS</Text>
            <View style={{ alignItems: "center", marginVertical: 10 }}>
              <View style={{ marginLeft: 220 }}>
                <PieChart
                  data={[
                    {
                      population: totalAux,
                      color: '#BEBEBE',
                    },
                    {
                      population: consumido,
                      color: '#25252D',
                    },

                  ]}
                  width={500}
                  height={300}
                  chartConfig={{
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0
                    },
                  }}
                  style={{ marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0 }}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="15"
                  hasLegend={false}
                  absolute
                />
              </View>
              <View style={styles.circle} />
            </View>


            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 32, fontWeight: "800", color: "#1D6A1B" }}>AHORROS: ${totalAux}</Text>
            </View>

          </View>
          {/* 

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
        <TouchableOpacity
          onPress={() => navigation.navigate('GASTOS')}>
          <Image source={CarteraIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HISTORIAL')}>
          <Image source={HistorialIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('INFORMACION')}>
          <Image source={InfoIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PERFIL')}>
          <Image source={PerfilIco} style={styles.iconos} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CONFIGURACION')}>
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
  },
  circle: {
    height: 190,
    width: 190,
    borderRadius: 360,
    backgroundColor: "#fff",
    position: "absolute",
    alignContent: "center",
    margin: "auto",
    marginTop: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 7,
  },
  content2: {
    padding: 20,
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
})