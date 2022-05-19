import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../images/logo.png"
import BackIco from "../../../images/BackIco.png"

import Imagen1 from "../../../images/info/Inversión.png"

const EmpezarScreen = ({ navigation }) => {
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
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: "center" }}>¿CÓMO EMPEZAR A INVERTIR?</Text>
                    <View style={{ backgroundColor: "#CECECE", padding: 10, marginTop: 30 }}>
                        <Text style={styles.text3}>Para comenzar, es necesario que puedas generar cierto nivel de ahorro que te permita realizar diferentes tipos de inversiones. Una recomendación es que puedes evitar gastos innecesarios y destinar un porcentaje de tus ingresos hasta juntar tu capital inicial.{"\n"}
                        </Text>
                        <Text style={styles.text2}>Para comenzar, es necesario que puedas generar cierto nivel de ahorro que te permita realizar diferentes tipos de inversiones. Una recomendación es que puedes evitar gastos innecesarios y destinar un porcentaje de tus ingresos hasta juntar tu capital inicial.{"\n"}
                        </Text>

                        <Text style={styles.text2}>Después, deberás definir tus objetivos financieros y los plazos en los que te gustaría lograrlos. Se trata de establecer cuánto quieres ganar y en qué tiempo esperas lograrlo, de forma que puedas delinear una estrategia de inversión con la cual te mantengas en ruta. Hacer este análisis te ayudará a entender de mejor forma cómo invertir tu dinero.{"\n"}</Text>
                        <Image source={Imagen1} style={{ width: 200, height: 200, resizeMode: "stretch", right: 0, position: 'absolute', marginTop: 60 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EmpezarScreen;


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