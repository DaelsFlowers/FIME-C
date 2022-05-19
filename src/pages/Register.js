import { View, Text, StyleSheet, CheckBox, ScrollView, Image, TextInput, Button, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from "../../images/logo.png"
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

import google from "../../images/google.png"
import facebook from "../../images/facebook.png"

const Login = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <ScrollView style={styles.container}>
            <LinearGradient
                colors={['#000', '#33333F']}
                style={styles.linearGradient}>
                <Image
                    style={styles.logo}
                    source={Logo} />
            </LinearGradient>

            <View style={styles.content}>
                <View style={styles.content2}>
                    <Text style={styles.text}>REGISTRARSE</Text>
                    <View style={styles.formLogin}>
                        <TextInput
                            placeholder='NOMBRE'
                            style={styles.inputStyle} />
                        <TextInput
                            placeholder='CORREO'
                            style={styles.inputStyle} />
                        <TextInput
                            placeholder='CONTRASEÑA'
                            style={styles.inputStyle} />
                        <TextInput
                            placeholder='CONTRASEÑA'
                            style={styles.inputStyle} />
                        <TextInput
                            placeholder='TELEFONO'
                            style={styles.inputStyle} />
                        <View style={{ alignItems: "center", marginTop: 20, }}>
                            <Text style={styles.terminos}>ACEPTO TERMINOS Y CONDICIONES</Text>
                            <Checkbox style={{ margin: 10 }} value={isChecked} onValueChange={setChecked} />
                        </View>
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('Index')}>
                            <LinearGradient
                                colors={['#0044AB', '#60BBEE']}
                                style={styles.button}>
                                <Text style={styles.buttonTextStyle} >LOG IN</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerTextStyle} >
                    YA TIENES UNA CUENTA?{"\n"}
                    <Text style={{ color: "#067BA0" }}>
                        LOG IN
                    </Text>
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%"
    },
    content: {
        margin: 30,
    },
    registerTextStyle: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
    },
    inputStyle: {
        height: 50,
        marginTop: 15,
        color: '#fff',
        paddingLeft: 15,
        paddingRight: 15,

        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.26,
        shadowRadius: 3.14,

        elevation: 5,
    },
    text: {
        color: "#000",
        fontSize: 30,
        margin: "auto",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 50,
        width: "75%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    content2: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 7,
    },
    content3: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 24,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',

        height: 200,
        width: "100%",
    },
    logo: {
        width: "95%",
        height: 130,
        resizeMode: 'stretch',
        marginTop: 20,
    },
    in: {
        width: "100%",
        height: 55,
        resizeMode: 'stretch',
        marginTop: 15,
    },

});

export default Login