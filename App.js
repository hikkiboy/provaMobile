import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { User, onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";
import { app_auth } from "./firebaseconfig";


import Routes, { TabNavigatior } from "./src/routes/stackRouter";


//json-server –watch -d 180 –host SEU-IP db.json

const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

export default function App() {
  const [user, SetUser] = useState();

  useEffect(() => {
    onAuthStateChanged(app_auth, (user) => {
      SetUser(user);
     
    });
  }, []);

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}