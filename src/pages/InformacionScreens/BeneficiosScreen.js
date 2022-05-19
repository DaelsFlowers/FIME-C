import React from 'react';
import { View, ScrollView, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../images/logo.png"
import BackIco from "../../../images/BackIco.png"

import Imagen1 from "../../../images/info/Seguro.png"

const BeneficiosScreen = ({ navigation }) => {
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
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: "center" }}>BENEFICIOS DE CONTRATAR UN SEGURO DE VIDA</Text>
                    <View style={{ backgroundColor: "#CECECE", padding: 10, marginTop: 30 }}>
                        <Text style={styles.text2}>Podemos partir del hecho de que nadie sabe a ciencia cierta qué es lo que pasará en el futuro. De ahí que depende de nosotros mismos estar preparados para esta incertidumbre y, si bien es cierto que no hay forma de disminuirla de forma significativa, siempre se puede estar preparado.{"\n"}
                        </Text>
                        <Text style={styles.text1}>Protección para tu familia.{"\n"}
                        </Text>

                        <Text style={styles.text2}>Un seguro de vida cuida el patrimonio familiar debido a que, nunca se puede tener certeza sobre cuáles serán las situaciones a las que se enfrentarán tus familiares en caso de que no estés; es por ello que se recomienda que la cobertura del seguro sea equivalente a lo que ganas durante un lapso de entre 2 a 5 años.{"\n"}</Text>
                        <Image source={Imagen1} style={{ width: 200, height: 200, resizeMode: "stretch", alignSelf: "center" }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BeneficiosScreen;


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