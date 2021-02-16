import React from 'react';
import { SafeAreaView, ScrollView, ImageBackground, View, Text } from "react-native";
import styles from './styles';

const HomeScreen = (props) => { 
    return ( 
        <View>

            <ImageBackground
                source={require('../../../assets/images/header.png')}
                style={styles.image}
            >

            </ImageBackground>
            <View style={styles.headerText}>
                <Text style={styles.h1}>Hey, USER!</Text>
                <Text style={styles.p}>Here are your reminders.</Text>
            </View>

            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.day}>Today</Text>
                    
                </ScrollView>
            </SafeAreaView>
        </View>
    );


};

export default HomeScreen;


