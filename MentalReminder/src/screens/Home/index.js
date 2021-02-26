import React from 'react';
import {useState} from "react";
import { SafeAreaView, ScrollView, ImageBackground, View, Text, Animated, TouchableHighlight, TouchableOpacity, StatusBar, } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from './styles';
import Reminder from './../../components/Reminder';

import reminders from './../../../assets/data/reminders.js';
import Drawer from './DrawerContent';

const reminder1 = reminders[0];
const reminder2 = reminders[1];

const HomeScreen = (props) => { 

    return ( 

        <View>

            <ImageBackground
                source={require('../../../assets/images/header.png')}
                style={styles.image}
            >

            </ImageBackground>

            {/* <View style={styles.container}>
                <Button
                    title="Go to details screen"
                    onPress={() => navigation.navigate("Details")}
                />
            </View> */}
           
           {/* <Drawer></Drawer> */}
            

            <View style={styles.headerText}>
                <Text style={styles.h1}>Hey, USER!</Text>
                <Text style={styles.p}>Here are your reminders.</Text>
            </View>

            <SafeAreaView>
                <ScrollView style={styles.scrollView}>

                    <Text style={styles.day}>Today </Text>

                    <Reminder reminder={reminder1}/>
                    <Reminder reminder={reminder2}/>
                    
                </ScrollView>
            </SafeAreaView>
        </View>
    );


};

export default HomeScreen;
