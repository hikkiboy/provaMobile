import { View, Text, Button, Image, StyleSheet, TouchableOpacity,ScrollView}from 'react-native'
import React from 'react'
import { clear, saveCarrinho } from '../utils/storage';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function Detalhes() {
    const navigation = useNavigation();
    const route = useRoute()
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={{height: 300, width:300}}  source={{uri: route.params?.foto}}/>
        <Text style={styles.nome}>{route.params?.name}</Text>
        <Text style={styles.desc}>{route.params?.desc}</Text>
        <Text>preço: {route.params?.preco}</Text>
        <Text>quantidade restante: {route.params?.qntd}</Text>
        <Text>anunciado por: {route.params?.author}</Text>
        <TouchableOpacity style = {styles.buttonRegistro} title = 'Registrar' onPress={() => saveCarrinho("@appliquidaste",route.params?.data)}>
          <Text style={styles.text}>Adicionar no carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttonRegistro} title = 'Registrar' onPress={() => navigation.navigate("Carrinho")}>
          <Text style={styles.text}>Visitar o carrinho</Text>
          </TouchableOpacity>
        {/* <Button onPress={() => saveCarrinho("@appliquidaste",route.params?.data)} title='Colocar no carrinho'></Button> */}
        {/* <Button style={styles.botao} onPress={() => navigation.navigate("Carrinho")} title='ir ao carrinho'></Button> */}
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    nome:{
        fontSize: 50,
        fontWeight: 'bold'
    },
    desc:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '300'
    },
    containcarrinho:{
        backgroundColor: '#2d79e3',
        position: 'absolute',
        top: 500,
        left: 250,
        borderRadius: 50,
        width: 100,
        height: 100,
        zIndex: 999,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      },
      carrinho:{
        textAlign: 'center'
      },
      botao:{
        marginTop: 10
      },
      buttonRegistro:{
        backgroundColor: "#2d79e3",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        width: 250,
        height: 50,
        borderRadius: 10
       },
       text:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        color: '#FFFFFF',
       },
})