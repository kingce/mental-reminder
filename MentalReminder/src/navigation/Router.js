import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../screens/Home";
import ProfileScreen from "./../screens/Profile";
import MenuScreen from "./../screens/Menu/index";
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
import AboutAppScreen from '../screens/Drawer/AboutAppScreen';
import DefaultScreen from '../screens/Drawer/DefaultScreen';
import UserInfoScreen from './../screens/Drawer/UserInfoScreen';
import PreferenceScreen from './../screens/Drawer/PreferenceScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const MenuStack = createStackNavigator();

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

function Menu(){
    return(
        <Drawer.Navigator menuContent={props => <MenuScreen {...props} />}>
            <Drawer.Screen component={MenuScreen} />
        </Drawer.Navigator>
    )
}

function Preset() {
    return (
        <Drawer.Navigator menuContent={props => <MenuScreen {...props} />}>
                {/* <Drawer.Screen name="HomeDrawer" component={HomeMenu} /> */}
                <Drawer.Screen name="Preset" component={PresetScreen} /> 
                {/* <Drawer.Screen name="Editdefault" component={DefaultScreen} /> */}
                {/* <Drawer.Screen name="ChangeUserInfo" component={UserInfoScreen} />
                <Drawer.Screen name="ChangePreferences" component={PreferenceScreen} /> 
                <Drawer.Screen name="AboutApp" component={AboutScreen} /> */}
        </Drawer.Navigator>
    )
}

function EditDefault(){
    return(
    <Drawer.Navigator menuContent={props => <MenuScreen {...props} />}>
        <Drawer.Screen name="About App" component={AboutAppScreen} />
        {/* <Drawer.Screen name="Edit Default" component={DefaultScreen} /> */}
    </Drawer.Navigator>
    )
}

// function Default(){
//     return(
//     <Drawer.Navigator menuContent={props => <MenuScreen {...props} />}>
//         <Drawer.Screen name="Edit Default" component={DefaultScreen} />
//         {/* <Drawer.Screen name="Edit Default" component={DefaultScreen} /> */}
//     </Drawer.Navigator>
//     )
// }



function ChangeInfo(){
    return(
    <Drawer.Navigator menuContent={props => <MenuScreen {...props} />}>
        <Drawer.Screen name="Change User Info" component={UserInfoScreen} />
    </Drawer.Navigator>
    )
}

function ChangePreference(){
    return(
    <Drawer.Navigator menuContent={props => <MenuScreen {...props} />}>
        <Drawer.Screen name="Change Preferences" component={PreferenceScreen} />
    </Drawer.Navigator>
    )
}

// function AboutApp(){
//     return(
//     <Drawer.Navigator menuContent={props => <MenuScreen {...props} />}>
//         <Drawer.Screen name="About App" component={AboutScreen} />
//     </Drawer.Navigator>
//     )
// }

const Router = (props) => { 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{ headerShown: false}}/>
                <Stack.Screen name={"Preset"} component={Preset}/>
                <Stack.Screen name={"EditDefault"} component={EditDefault}/>
                {/*<Stack.Screen name={"User Info"} component={EditDefault}/>
                <Stack.Screen name={"Preference"} component={EditDefault}/> */}
                <Stack.Screen name={"About App"} component={EditDefault}/> 
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