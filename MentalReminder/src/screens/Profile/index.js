import React from "react";
import { ImageBackground, View, Text } from "react-native";
import styles from './styles';


const ProfileScreen = (props) => { 
    return (
        <View>
            <ImageBackground 
                source={require('../../../assets/images/header.png')}
                style={styles.image}
            >
            </ImageBackground>

            <View>
                <Text>THIS IS THE PROFILE SCREEN</Text>
            </View>
        </View>
    );
};

export default ProfileScreen;
