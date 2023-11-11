import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getCarrinho(key){
    const carrinho = await AsyncStorage.getItem(key)
    return JSON.parse(carrinho) || [];
}

export async function saveCarrinho(key, newItem){
    let myCarrinho = await getCarrinho(key)

    myCarrinho.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myCarrinho))
    console.log("foi")
}

export async function removerItem(id){
    let produtos = await getCarrinho("@appliquidaste")

    let myCarrinho = produtos.filter( item => {
        return(item.id !== id)
    })

    await AsyncStorage.setItem("appliquidaste")
    console.log("deleteou")
    return myCarrinho
}

export async function clear(){
    await AsyncStorage.clear()
}