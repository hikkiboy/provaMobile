import React, { Component } from 'react';
import { View, Text,Button, Image,StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Lista ({data}) {
    const navigation = useNavigation();
    return (

        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Detalhes', {data: data,name: data.title, preco: data.preco, author: data.author, foto: data.foto, qntd: data.quantidade, desc: data.descricao})}>
        <Image source={{uri: data.foto}} style={styles.foto} />
        </TouchableOpacity>
        <Text style={styles.titulo}>{data.title}</Text>
        <Text style={styles.titulo}>{data.preco}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    foto:{
      width: 150,
      height: 300,
      margin: 12,
      marginHorizontal: 15
    },
    titulo:{
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })

