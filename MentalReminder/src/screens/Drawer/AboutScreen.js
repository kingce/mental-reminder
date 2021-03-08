import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './styles';

const AboutScreen = () => {
    return (
      <View style={styles.headerText}>
        <Text style={styles}> This app is about reminding user based on their reminder lists that
                              have been created. </Text>
      </View>
    );
};

export default AboutScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });