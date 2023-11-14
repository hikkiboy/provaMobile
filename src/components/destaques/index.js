import React, { Component } from 'react';
import { View, Text,Button, Image,StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

export default function ListaDestaques ({data}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data.title}</Text>
            <LinearGradient
            style ={styles.gradient}
            colors ={[ 'transparent','rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.95)']}
            />
        <Image source={{uri: data.foto}} style={styles.foto} />
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    foto:{
      width: 360,
      height: 300,
      borderRadius: 10,
      alignSelf: 'center'
    },
    titulo:{
      fontWeight: 'bold',
      textAlign: 'center'
    },
    text:{
        position: 'absolute',
        zIndex: 999,
        color: 'white',
        top: 200,
        left: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center'

    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 1
    }
  })

