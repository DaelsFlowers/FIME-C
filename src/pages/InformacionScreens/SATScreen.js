import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../images/logo.png"
import BackIco from "../../../images/BackIco.png"

import Imagen1 from "../../../images/info/SAT.png"

const SATScreen = ({ navigation }) => {
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
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: "center" }}>QUE ES EL SAT?</Text>
                    <View style={{ backgroundColor: "#CECECE", padding: 10, marginTop: 30 }}>

                        <Image source={Imagen1} style={{
                            width: 330, height: 80, resizeMode: "stretch", alignSelf: "center", marginTop: 10
                        }} />
                        <Text style={styles.text2}>{"\n"}El SAT es el Sistema de Administración Tributaria, institución gubernamental encargada de que las personas, tanto físicas como morales, contribuyan lo que corresponde a sus disposiciones tributarias y aduaneras.

                            {"\n"}{"\n"}Su objetivo es que se pague la cantidad debida según los ingresos de cada persona o el nivel de facturación que ellos tienen.{"\n"}
                        </Text>
                        <Text style={styles.text2}>Su<Text style={styles.text3}> misión</Text> es “Recaudar los recursos tributarios y aduaneros que la Ley prevé, dotando al contribuyente de las herramientas necesarias que faciliten el cumplimiento voluntario.”</Text>
                        <Text style={styles.text2}>{"\n"}Además ofrece servicios como:{"\n"}{"\n"}
                            <Text style={styles.text4}>
                                •	Inscripción en el RFC (Registro Federal de Contribuyentes).{"\n"}{"\n"}
                                •	Avisos relacionados con el RFC.{"\n"}{"\n"}
                                •	Tramitar y validar tu CURP (Clave Única de Registro de Población) ante el Registro Nacional de Población e Identificación Personal.{"\n"}{"\n"}
                                •	Tramitar tu alta como persona física en el SAT.{"\n"}{"\n"}
                                •	Dar de alta tu empresa en México.{"\n"}{"\n"}
                                •	Conseguir material que necesitas relacionado con percepciones y deducciones.{"\n"}{"\n"}
                                •	Trámite de factura electrónica{"\n"}{"\n"}
                                •	Tus declaraciones, pagos y garantías de impuestos.{"\n"}{"\n"}
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default SATScreen;


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
        fontWeight: '500',
        textAlign: 'left',
    },
    text4: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
    },
});