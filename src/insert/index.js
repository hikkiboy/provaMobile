import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Alert, TextInput, ActivityIndicator, KeyboardAvoidingView, ImageBackground } from 'react-native';
import React, {useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import api from '../services/api';
import {useNavigation} from '@react-navigation/native'








const Insert = () => {
    const navigation = useNavigation();


    const [titulo, setTitulo] = useState()
    const [author, setAuthor] = useState()
    const [foto, setFoto] = useState()
    const [preco, setPreco] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    const [descricao, setDescricao] = useState()


    async function InsertNewProduct(){
        const insert = await api.post('/produtos',{
          title: titulo,
          author: author,
          foto: foto,
          preco: preco,
          quantidade: quantidade,
          descricao: descricao
        })
        setTitulo()
        setAuthor()
        setFoto()
        setPreco()
        setQuantidade()
        setDescricao()
        alert('Inserido com sucesso')
        navigation.navigate('Home')
      }

    return (
      
      <SafeAreaView>

        <KeyboardAwareScrollView>

      

        <TextInput value= {titulo} style={styles.input} placeholder='Nome da bebida' autoCapitalize='none' onChangeText={(text) => setTitulo(text)}></TextInput>
        <TextInput value= {author} style={styles.input} placeholder='Seu Nome' autoCapitalize='none' onChangeText={(text) => setAuthor(text)}></TextInput>
        <TextInput value={foto} style = {styles.input} placeholder='Link da foto' autoCapitalize='none'
        onChangeText={(text) => setFoto(text)}></TextInput>
         <TextInput value={preco} style = {styles.input} placeholder='Preço' autoCapitalize='none'
        onChangeText={(text) => setPreco(text)} ></TextInput>
        <TextInput value={quantidade} style = {styles.input} placeholder='Quantidade' autoCapitalize='none'
        onChangeText={(text) => setQuantidade(text)} />
        <TextInput value={descricao} style = {styles.input} placeholder='Descrição do produto' autoCapitalize='none'
        onChangeText={(text) => setDescricao(text)} />
        
        <TouchableOpacity style = {styles.buttonRegistro} title = 'Registrar' onPress={() => InsertNewProduct()}>
          <Text style={styles.text}>Cadastrar</Text>
          </TouchableOpacity>
        
    </KeyboardAwareScrollView>

    </SafeAreaView  >
    )
}
export default Insert

const styles = StyleSheet.create({
  container:{
    marginTop: 250,
    //marginBottom: 250,
  
  },
 input: {
  backgroundColor: '#FFFFFF',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor:'#A6A6A6',
    width: 350,
    alignSelf: 'center',
    height: 55,
    textAlign:'center'
 },
 buttonRegistro:{
  backgroundColor: "#2d79e3",
  alignSelf: "center",
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 20,
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
 fundo:{
  backgroundColor: 'White'
 }

 
});