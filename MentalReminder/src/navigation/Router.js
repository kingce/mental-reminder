import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../screens/Home";
import ProfileScreen from "./../screens/Profile";
import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => { 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
