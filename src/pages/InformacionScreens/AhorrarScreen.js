import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../images/logo.png"
import BackIco from "../../../images/BackIco.png"

import Imagen1 from "../../../images/info/Ahorro.png"

const AhorrarScreen = ({ navigation }) => {
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
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: "center" }}>¿POR QUÉ ES IMPORTANTE AHORRAR?</Text>
                    <View style={{ backgroundColor: "#CECECE", padding: 10, marginTop: 30 }}>
                        <Text style={styles.text1}>1. Facilita pagar los estudios.</Text>
                        <Text style={styles.text2}>Contar con un fondo de ahorros previamente construido te ayudará a pagar los estudios, te quitarás un peso de encima y tendrás tranquilidad cuando lleguen las fechas de pago.{"\n"}
                        </Text>
                        <Text style={styles.text1}>2. Es un apoyo en caso de emprender.</Text>
                        <Text style={styles.text2}>Si tienes un fondo de ahorros destinado a algún proyecto que tengas en mente, serás capaz de usarlo sin afectar las finanzas de tu hogar.{"\n"}</Text>
                        <Text style={styles.text1}>3. Puedes liquidar deudas.</Text>
                        <Text style={styles.text2}>Deudas debido a las compras, así como los saldos de las tarjetas de crédito, impactan las finanzas y puede provocar una bola de nieve que vaya creciendo en el tiempo en caso de no puedas pagar tus compromisos en las fechas establecidas.{"\n"}</Text>
                        <Text style={styles.text1}>4. Previene contra imprevistos.</Text>
                        <Text style={styles.text2}>Recuerda que no puedes predecir accidentes o emergencias médicas, pero si puedes estar prepado en caso de que suceda.{"\n"}</Text>
                        <Text style={styles.text1}> 5. Te ayuda para el retiro.</Text>
                        <Text style={styles.text2}>Es posible que en tu empleo existan prestaciones de jubilación o que estés afiliado a instituciones de gobierno, las cuales te otorguen una pensión. Pero tener un monto de ahorro extra te permitirá invertirlo sin que afecte tu estilo de vida.{"\n"}{"\n"}{"\n"}</Text>
                        <Image source={Imagen1} style={{ width: 100, height: 100, resizeMode: "stretch", right: 0, position: 'absolute', bottom: 0 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AhorrarScreen;


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
    }
});