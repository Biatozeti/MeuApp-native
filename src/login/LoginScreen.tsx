import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    function login() {
        const dados = {
            email: email,
            password: password
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>

            <Image source={require('../assets/images/spotify.png')} style={styles.logo}/>

            <Text style={styles.title}>
                Entrar no Spotify
            </Text>

            <View style={styles.card}>
            <TextInput style={styles.input} placeholder="E-mail ou nome de usuario" placeholderTextColor="#FFFFFF"
                onChangeText={(textEmail)=> setEmail(textEmail)}
                />

            <TextInput style={styles.input} placeholder="digite sua senha" placeholderTextColor="#FFFFFF"
                onChangeText={(textPassword)=> setEmail(textPassword)}
                />
            </View>

           
                <TouchableOpacity style={styles.button}
                onPress={()=>{login()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu a senha ?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui conta ? Cadastre-se!</Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    logo: {
       width:150,
       height:150,
   marginBottom:400
    },

    title: {
        marginTop: -400,
        color: 'white',
        fontSize: 30,
    },
    card: {
        backgroundColor: '#121212',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation:3,
        shadowColor:'rgba(0,0,0,0.3',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
        marginBottom: -390
    },
    input: {
    
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor: 'white'
    },
    button: {
        backgroundColor: '#ffffff',
        height: 40,
        borderRadius: 8,
        marginTop:380,
        width:50
    },
    buttonText: {
        textAlign:'center',
        fontSize:16,
        lineHeight:40,
    },
    forgotPassword:{
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10
    },
})
export default LoginScreen;