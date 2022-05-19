import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../images/logo.png"
import BackIco from "../../../images/BackIco.png"

import Imagen1 from "../../../images/info/Seguro.png"

const FijosScreen = ({ navigation }) => {
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
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: "center" }}>¿QUE SON LOS GASTOS FIJOS?</Text>
                    <View style={{ backgroundColor: "#CECECE", padding: 10, marginTop: 30 }}>

                        <Text style={styles.text2}>Son los gastos que por lo regular no cambian en cuestion de valor. Estos son extremadamente importantes ya que no los puedes dejar de cubrir y son practicamente obligatorios mes con mes.

                            {"\n"}{"\n"}Un claro ejemplo puede ser alguna colegiatura de tu escuela, seguros, el plan de telefonía celular, membresías de gimnacio.{"\n"}</Text>
                        {/* <Image source={Imagen1} style={{ width: 200, height: 200, resizeMode: "stretch", alignSelf: "center" }} /> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FijosScreen;


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