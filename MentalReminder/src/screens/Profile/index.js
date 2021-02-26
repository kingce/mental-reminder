import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";
import styles from './styles';

import userData from './../../../assets/data/user.js';

const user = userData[0];

const ProfileScreen = (props) => { 
    return (
        <View>
            <ImageBackground 
                source={require('../../../assets/images/header.png')}
                style={styles.image}
            >
            </ImageBackground>

            <View style={styles.profileInfo}>
                <Image style={styles.profilePic} source={require('./../../../assets/images/default-profile.png')} />
                <Text style={styles.h1}>{user.name}</Text>
                <Text style={styles.joinedDate}>Joined {user.dateJoined}</Text>
            </View>

        </View>
    );
};

export default ProfileScreen;
