import React from 'react';
import { ImageBackground, View, Text} from 'react-native';
import styles from './styles';


const NewScreen = (props) => { 
    return ( 
        <View>
            <ImageBackground 
                source = { require('../../../assets/images/header.png')}
                style={styles.image}
            >

            </ImageBackground>

        <View>
            <Text>This will be where users can make a new reminder</Text>
        </View>

        </View>
    );
};

export default NewScreen;
