import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet,FlatList, Button, Image, Touchable, TouchableOpacity, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';
import Lista from '../components/lista';
import { AntDesign } from '@expo/vector-icons'; 
import Carousel from 'react-native-snap-carousel';


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

  const sliderWidth = Dimensions.get('window').width
  const itemWidth = sliderWidth * 0.88

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

  function carouselCardItem({item}){
    return(
      <View style={styles.cardCarousel}>
         <Text style={styles.text}>{item.title}</Text>
        <Image source={{uri: item.foto}} style={styles.fotoDestaque}/>
        <LinearGradient
            style ={styles.gradient}
            colors ={[ 'transparent','rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.95)']}
            />
      </View>
    )
  }

    return (
      <SafeAreaView style={{flex: 1}}>
        <View> 
        <TouchableWithoutFeedback style={{zIndex:1}} onPress={() => navigation.navigate('Inserir')}>
        <AntDesign style={styles.iconPlus} name="pluscircle" size={66} color="#2d79e3" />
        </TouchableWithoutFeedback>
        </View>
        <ScrollView>
        <View style={styles.containerSearch}>
          <View style={styles.barraPesquisa}>
        <TextInput placeholder='Pesquisar' style={styles.input} value={input} onChangeText={(text) => setInput(text) }>
        </TextInput>
        <TouchableOpacity onPress={ () => handleSearch()}>
        <EvilIcons name="search" size={33} color="black" />
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.iconFilter} onPress={() => alert('filtro')}>
        <Ionicons name="filter" size={40} color="black" />
        </TouchableOpacity>
        </View>
        <Text style={styles.titulo}>DESTAQUES DA SEMANA</Text>
        <View style={{flex: 1}}>
        <Carousel
        data={destaques}
        renderItem={carouselCardItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        useScrollView = {true}
        />
        </View>
        <Text style={styles.titulo}>PRODUTOS PRA COMPRAR COMPRE AGORA</Text>
        <View style={{flex: 1}}>
        <FlatList
        data = {produtos}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator= {false}
        // extraData={}
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
    marginTop: 20,
    marginLeft: -14
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
  fotoDestaque:{
    width: 330,
    height: 300,
    borderRadius: 10,
    marginLeft: 20,
    alignSelf: 'center'
  },
  cardCarousel:{
    width: '88%',
  },
  gradient:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '55%',
    borderRadius: 14,
    zIndex: 1,
    width: 350,
    marginLeft: -15
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
iconPlus:{
  position: 'absolute',
  zIndex: 1,
  top: 590,
  left: 290

}

})
