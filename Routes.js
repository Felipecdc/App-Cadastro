import React from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";

const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} /> 
                <Stack.Screen name="Home" component={Home} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;