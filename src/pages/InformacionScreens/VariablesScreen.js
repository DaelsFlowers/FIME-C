import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../images/logo.png"
import BackIco from "../../../images/BackIco.png"

import Imagen1 from "../../../images/info/Seguro.png"

const VariablesScreen = ({ navigation }) => {
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
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: "center" }}>¿QUE SON LOS GASTOS VARIABLES?</Text>
                    <View style={{ backgroundColor: "#CECECE", padding: 10, marginTop: 30 }}>

                        <Text style={styles.text2}>Estos a diferencia de los fijos, los variables por lo regular cambian cada cierto tiempo, debido a variaciones del volumen de producción; esto se refiere a que mientras menos producto haya y exista mucha demanda por ese producto, mas caro será.

                            {"\n"}{"\n"}Por ejemplo, la comida, la ropa, la gasolina, peliculas, libros, etc.{"\n"}</Text>
                        {/* <Image source={Imagen1} style={{ width: 200, height: 200, resizeMode: "stretch", alignSelf: "center" }} /> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default VariablesScreen;


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