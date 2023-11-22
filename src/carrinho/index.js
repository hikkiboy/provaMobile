
import { View, Text, StyleSheet,FlatList, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { getCarrinho } from '../utils/storage';
import { useIsFocused } from '@react-navigation/native';
import Lista from '../components/lista';
import { clear } from '../utils/storage';
import {useNavigation} from '@react-navigation/native'


export default function Carrinho() {

    const navigation = useNavigation()

    function Comprar() {
        clear()
        alert('Comprou')
        navigation.navigate('Home')
    }

    const IsFocused = useIsFocused()

    const[produtos, setProdutos] = useState([])

    useEffect(()=>{

        let isActive = true

        async function getProdutos(){
            const result = await getCarrinho("@appliquidaste")
            if(isActive){
                setProdutos(result)
            }
            console.log(result)
        }
        if(isActive){
            getProdutos()
        }

        return () =>{
            isActive = false
        }
        
    },[IsFocused])

    return (
      <SafeAreaView style={styles.container}>
        <View>
        <Image style={styles.logo} source={require('../assests/logo.png')}/>
        </View>


        {produtos.length === 0 && (
            <Text>Nenhum produto no seu carrinho </Text>
        )}

        

        <FlatList
        showsVerticalScrollIndicator = {false}
        style={{marginTop: 10}}
        data = {produtos}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) =>( 
        <Lista data={item}/> 
        )}
        />
        <Button onPress={() => Comprar()} title='Comprar'></Button>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title:{
        color: "#000",
        fontWeight: 'bold',
        fontSize: 24
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
})