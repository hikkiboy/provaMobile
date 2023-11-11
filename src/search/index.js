import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import api from '../services/api';
import { useRoute } from '@react-navigation/native';
import Lista from '../components/lista';


export default function Search(){

    const route = useRoute()
    const[produtos, setProdutos] = useState([])

    useEffect(() => {
        async function fetchProdutos(){
            const response = await api.get(`/produtos?title_like=${route.params?.name}`)
            setProdutos(response.data)
        }
        
        fetchProdutos();

    }, [route.params?.name])

    return(
        <>
        <View>
        <FlatList
        data = {produtos}

        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator= {false}
        renderItem={({item}) => <Lista data={item} />
        
        }
        />
        </View>

        <View>
        <Button title='a' onPress={() => console.log(produtos)}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    }
})
