import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../screens/Home";
import ProfileScreen from "./../screens/Profile";
import MenuScreen from "./../screens/Menu";
import HomeTabNavigator from "./HomeTabNavigator";
import { View, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import AboutScreen from './../screens/Drawer/AboutScreen';
import PresetScreen from './../screens/Drawer/PresetScreen';
import DefaultScreen from './../screens/Drawer/DefaultScreen';
import UserInfoScreen from './../screens/Drawer/UserInfoScreen';
import PreferenceScreen from './../screens/Drawer/PreferenceScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold'
        }
    }}>
       <HomeStack.Screen name = "Home" component={HomeTabNavigator} options={{
           headerLeft: () => (
               <Icon.Button name= "ios-menu" size={25}
               options={() => {navigation.openDrawer()}}
               ></Icon.Button>
           )
       }}/> 
    </HomeStack.Navigator>
);

// const AboutStackScreen = ({navigation}) => (
//     <AboutStack.Navigator screenOptions={{
//         headerTintColor: '#fff',
//         headerTitleStyle:{
//             fontWeight: 'bold'
//         }
//     }}>
//         <AboutStack.Screen name = "About" component={AboutScreen}/> 
//     </AboutStack.Navigator>
// );

const Router = (props) => { 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{ headerShown: false}}/>
                <Stack.Screen name={"Edit Preset"} component={PresetScreen}/>
                <Stack.Screen name={"Edit Defaults"} component={DefaultScreen}/>
                <Stack.Screen name={"User Info"} component={UserInfoScreen}/>
                <Stack.Screen name={"Preference"} component={PreferenceScreen}/>
                <Stack.Screen name={"About"} component={AboutScreen}/>
            </Stack.Navigator>
            
            {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                {/* <Drawer.Screen name="HomeDrawer" component={MainTabScreen} /> */}
                {/* <Drawer.Screen name="Preset" component={PresetScreen} /> */}
                {/* <Drawer.Screen name="Editdefault" component={EditdefaultScreen} />
                <Drawer.Screen name="ChangeUserInfo" component={MyprofileScreen} />
                <Drawer.Screen name="ChangePreferences" component={ChangePreferencesScreen} /> */}
                {/* <Drawer.Screen name="AboutApp" component={AboutScreen} />
            </Drawer.Navigator> */}
        </NavigationContainer>
    );
};

export default Router;

{/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                <Drawer.Screen name="Preset" component={PresetScreen} />
                <Drawer.Screen name="Editdefault" component={EditdefaultScreen} />
                <Drawer.Screen name="ChangeUserInfo" component={MyprofileScreen} />
                <Drawer.Screen name="ChangePreferences" component={ChangePreferencesScreen} />
                <Drawer.Screen name="AboutApp" component={AboutScreen} />
            </Drawer.Navigator> */}