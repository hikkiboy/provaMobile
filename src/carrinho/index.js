
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { getCarrinho } from '../utils/storage';
import { useIsFocused } from '@react-navigation/native';
import Lista from '../components/lista';


export default function Carrinho() {
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

        {produtos.length === 0 && (
            <Text>Nenhum produto no seu carrinho </Text>
        )}

        <FlatList
        showsVerticalScrollIndicator = {false}
        style={{marginTop: -70}}
        data = {produtos}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Lista data={item}/> }
        />

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
    }
})