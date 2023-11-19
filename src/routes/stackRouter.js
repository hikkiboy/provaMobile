import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { NavigationContainer } from "@react-navigation/native"
import Login from "../initial";
import Home from "../home";
import Cadastro from "../cadastro";
import LoginPage from "../login";
import Search from "../search";
import Detalhes from "../detalhes";
import Carrinho from "../carrinho";
import Insert from "../insert";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Inital">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inital"
        component={Login}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Resultados"
        }}
      />
        <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          title: "Detalhes"
        }}
      /><Stack.Screen
      name="Carrinho"
      component={Carrinho}
      options={{
        title: "Carrinho"
      }}
    />
    <Stack.Screen
      name="Inserir"
      component={Insert}
      options={{
        title: "Cadastre um novo produto"
      }}
    />
      
    </Stack.Navigator>
    
  );
}

// const Tab = createBottomTabNavigator();

// export function TabNavigatior() {
//   return(
//    <Tab.Navigator>
//     <Tab.Screen name = "Home" component={Home}  options={{headerShown: false, tabBarIcon: ({color, size})=>(
//       <Ionicons name="home" size={24} color="black" />
//     )}}/>
//     <Tab.Screen name = "Perfil" component={Profile} options={{headerShown: false, tabBarIcon: ({color, size})=>(
//       <Ionicons name="person-sharp" size={24} color="black" />
//     )}}/>
//     {/*<Tab.Screen name = "Trilhas" component={Fetch}options={{headerShown: false}}/>*/}
//    </Tab.Navigator>
//   )
// }