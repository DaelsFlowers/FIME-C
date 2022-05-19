import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../images/logo.png"
import BackIco from "../../../images/BackIco.png"

import Imagen1 from "../../../images/info/Tarjeta.png"

const CreditoScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ backgroundColor: "#000", width: "100%", height: 90, alignItems: 'center', justifyContent: "center" }}>
                <Image source={Logo} style={{ width: 200, height: 75, resizeMode: "stretch", marginTop: 15 }} />
                <TouchableOpacity style={{ position: "absolute", left: 0, margin: 10 }} onPress={() => navigation.goBack()}>
                    <Image source={BackIco} style={{ width: 60, height: 40, resizeMode: "stretch", marginTop: 20 }} />
                </TouchableOpacity>
            </View>
            <ScrollView  >
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: "center" }}>¿QUE ES UNA TARJETA DE CREDITO?</Text>
                    <View style={{ backgroundColor: "#CECECE", padding: 10, marginTop: 30 }}>

                        <Text style={styles.text2}>Las tarjetas de crédito son formas mas sencillas de pedir un prestamo a un banco.{"\n"}</Text>
                        <Text style={styles.text3}>Su principal ventaja es que te pueden ayudar en el manejo de tu flujo de efectivo a corto plazo, pues realizas compras sin necesariamente utilizar tu efectivo en ese momento, a fin de cuentas vas a tener que pagar ese prestamo. {"\n"}</Text>
                        <Image source={Imagen1} style={{ width: 200, height: 200, resizeMode: "stretch", right: 0, position: 'absolute', marginTop: 160 }} />
                        <Text style={styles.text2}>Las tarjetas de crédito dependiendo de cual elijas, varian en cuotas, intereses y límite de crédito.{"\n"}

                            {"\n"}Las cuotas son el monto mínimo que debes pagar con tu tarjeta de crédito para poder seguir usandola.{"\n"}

                            {"\n"}Los intereses es un valor que varia en banco y banco, esta cifra es la que pagas cuando sin querer dejas que tu fecha de pago se pase.{"\n"}

                            {"\n"}El limite de crédito es aquel que con el paso del tiempo va a ir aumentando, este crecimiento dependerá por lo general, de que tan a tiempo pagues tu deuda.{"\n"}

                            {"\n"}Ten cuidado con las tarjetas de crédito, es bueno tenerlas pero hay que saber manejarlas ya que es un arma de doble filo. {"\n"}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreditoScreen;


const styles = StyleSheet.create({
    text1: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'left'
    },
    text2: {
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'justify'
    },
    text3: {
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'left',
        width: 175
    }
});