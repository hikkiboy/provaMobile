import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import React, {useState} from 'react'



const Login = ({navigation}) => {

    return (
        <SafeAreaView>
          <View style={styles.logocontain}>
            <Image style={styles.logo} source={require('../assests/logo.png')}/>
          </View>
        <View>
        <TouchableOpacity style={styles.bottonCadastro} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.loginCadastro}>Cadastro</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.bottonLogin} onPress={ () => navigation.navigate('Login')}>
        <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        </View>
  
        
      </SafeAreaView>
    )
}
export default Login





const styles = StyleSheet.create({
  bottonCadastro: {
    alignSelf: 'center',
    backgroundColor: '#2d79e3',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 42,
    paddingRight: 42,
    margin: 3,
    borderRadius: 10
  },
  loginCadastro:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 40,
    paddingRight: 40,
    color: 'white'
  },
  bottonLogin: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 38,
    paddingRight: 38,
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#2d79e3',
    borderWidth: 1,
    borderRadius: 10
    
  },
  login:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 57,
    paddingRight: 57,
    
  },
  logo:{
    alignSelf: 'center',
    height: 50,
    width: 300
  },
  logocontain:{
    height: '15%',
    width: '100%',
    marginTop: 250,
  }
  
});





