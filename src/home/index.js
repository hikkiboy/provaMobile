import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet,FlatList, Button, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native'
import { EvilIcons } from '@expo/vector-icons';
import Lista from '../components/lista';
import { Feather } from '@expo/vector-icons';
import ListaDestaques from '../components/destaques';

export default function  Home() {
  const navigation = useNavigation();

  const [input,setInput] = useState('')
  const [produtos, setProdutos] = useState([])

  const [destaques, setDestaques] = useState([])

  function handleSearch(){
    if(!input) return;
    
    let inputVal = input
    console.log(inputVal)
    navigation.navigate("Search", {name: inputVal})
    setInput("")
  }


  useEffect(() => {
    async function fetch(){
      const response = await api.get("/produtos")
      setProdutos(response.data)
      console.log(response.data)
      console.log(produtos)
    }
    async function fetchDestaques(){
      const response = await api.get("/destaques")
      setDestaques(response.data)
    }
    fetchDestaques()
    fetch()
  }, [])

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
        <View style={styles.containerSearch}>
          <View style={styles.barraPesquisa}>
        <TextInput placeholder='Pesquisar' style={styles.input} value={input} onChangeText={(text) => setInput(text) }>
        </TextInput>
        <TouchableOpacity onPress={ () => handleSearch()}>
        <EvilIcons name="search" size={33} color="black" />
        </TouchableOpacity>
        </View>
        <Ionicons style={styles.iconFilter} name="filter" size={40} color="black" />
        </View>
        <Text style={styles.titulo}>DESTAQUES DA SEMANA</Text>
        <View style={{flex: 1}}>
        <FlatList
        data = {destaques}
        horizontal = {true}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator = {false}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator= {false}
        renderItem={({item}) => <ListaDestaques data={item} />
        }
        />
        </View>

        <View style={{flex: 1}}>
        <FlatList
        data = {produtos}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator= {false}
        renderItem={({item}) => <Lista data={item} />
        }
        />
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  barraPesquisa:{
    backgroundColor: '#FFFFFF',
    margin: 10,
    marginLeft:20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor:'#A6A6A6',
    width: 300,
    alignSelf: 'center',
    height: 55,
    textAlign:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconFilter:{
    alignSelf: 'center',
    marginLeft: 10
  },
  containerSearch:{
    flexDirection: 'row',
    marginTop: 20
  },
  foto:{
    width: 150,
    height: 300,
    margin: 12,
    marginHorizontal: 15
  },
  titulo:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  lupa:{
    alignSelf:'flex-end',
    maxWidth: 100
  },
  input:{
    width: '90%'
  },

})
