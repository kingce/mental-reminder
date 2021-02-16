import React from "react";
import { View, Text } from "react-native";
import styles from './styles';


const Profile = (props) => { 
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
