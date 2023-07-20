import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import firebase from "../../services/firebase";

export default function Login(){

    const Navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function CriarConta(){
        Navigation.navigate('Cadastro')
    }

    async function Entrar(){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( (value) => {[
            Navigation.navigate('Home', {user: value.user.email})
        ]})
        .catch( (error) => {
            alert('Ops, algo deu errado!')
            return;
        })

        setEmail('');
        setPassword('');
        Keyboard.dismiss();
    }

    return(
        <View style={styles.container}>
            <View style={styles.areaLogin}>
                <Text style={styles.titulo}>Logar no App</Text>
                <TextInput
                placeholder="Insira seu Email"
                value={email}
                onChangeText={ (valor) => setEmail(valor)}
                style={styles.input}
                />
                <TextInput
                placeholder="Insira sua senha"
                value={password}
                onChangeText={ (valor) => setPassword(valor)}
                style={styles.input}
                />
                <TouchableOpacity style={styles.areaBtn} onPress={Entrar}>
                    <Text style={styles.tituloBtn}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.areacadastro} onPress={CriarConta}>
                    <Text style={styles.tituloBtn2}>Criar conta</Text>
                </TouchableOpacity>
            </View>

            <Image
            source={require('../../Image/logo.png')}
            style={{
                width: 250,
                height: 250,
                marginTop: 30
            }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5BCBDC'
    },
    areaLogin:{
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    titulo:{
        fontSize: 28,
        fontWeight: 'bold',
    },
    input:{
        width: '90%',
        height: 45,
        padding: 10,
        fontSize: 18,
        borderRadius: 7,
        marginTop: 20,
        borderWidth: 1
    },
    areaBtn:{
        width: 120,
        height: 45,
        marginTop: 25,
        backgroundColor: '#000',
        justifyContent: 'center',
        borderRadius: 9
    },
    tituloBtn:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    areacadastro:{
        marginTop: 10
    },
    tituloBtn2:{
        color: '#000'
    }
})