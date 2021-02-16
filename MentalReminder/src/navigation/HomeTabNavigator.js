import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import HomeScreen from "./../screens/Home";
import ProfileScreen from "./../screens/Profile";
import NewScreen from "./../screens/New";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => { 
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#C1D1BE',
        }}>
            <Tab.Screen 
                name={"Home"} 
                component={HomeScreen}
                options={{
                    //props.focused is a thing that u can access also
                    tabBarIcon: ({color}) => (
                        <FontAwesomeIcon  icon={ faHome } size={30} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name={"New Reminder"} 
                component={NewScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesomeIcon icon={ faPlusCircle } size={40} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name={"Profile"} 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesomeIcon icon={ faUser } size={30} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
