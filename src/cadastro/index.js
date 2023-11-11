import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Alert, TextInput, ActivityIndicator, KeyboardAvoidingView, ImageBackground } from 'react-native';
import React, {useState} from 'react'
import { app, app_DB, app_auth } from '../../firebaseconfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 






const Cadastro = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = app_auth;


    const SignIn = async () => {
      setLoading(true)
      try{
        const response = await signInWithEmailAndPassword(auth, email, senha)
        

      } catch (error) {

        alert('deu erro')
      } finally{
        setLoading(false)
      }
    }

      const SignUp = async () => {
        setLoading(true)
        try{
          
          const response = await createUserWithEmailAndPassword(auth, email, senha)

          alert('Usuário Criado com sucesso !')
  
        } catch (error) {
          console.log(error)
          alert('Faio, Erro : ' + error)
        } finally{
          setLoading(false)
        }
    }
  
    return (
      
      <SafeAreaView>


      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style = {styles.container}>

        <TextInput value= {nome} style={styles.input} placeholder='Nome' autoCapitalize='none' onChangeText={(text) => setNome(text)}></TextInput>
        <TextInput value={email} style = {styles.input} placeholder='Email' autoCapitalize='none'
        onChangeText={(text) => setEmail(text)}></TextInput>
         <TextInput value={senha} style = {styles.input} placeholder='Senha' autoCapitalize='none'
        onChangeText={(text) => setSenha(text)} secureTextEntry={true}></TextInput>
        <TextInput value={senha} style = {styles.input} placeholder='Confirmar Senha' autoCapitalize='none'
        onChangeText={(text) => setSenha(text)} secureTextEntry={true}></TextInput>
        

        {loading ?(
           <ActivityIndicator size="large" color="#0000ff"/>  
        ): (
          <>
          <TouchableOpacity style = {styles.buttonRegistro} title = 'Registrar' onPress={SignUp}>
          <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>

          </>
        )} 

        

      </KeyboardAvoidingView>

    </SafeAreaView  >
    )
}
export default Cadastro

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