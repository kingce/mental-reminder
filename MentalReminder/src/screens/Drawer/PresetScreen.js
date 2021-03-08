import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

const PresetScreen = (props) => {
    return (
      // <View style={styles.container}>
      <View style={styles.headerText}>
          <Text style={styles.h1}>Add New Preset</Text>
          <Text style={styles.p}> Icon {' '} </Text>
          <Text style={styles.cen}> <FontAwesomeIcon icon={ faSuitcase } size={50}/> </Text>
          <Text style={styles.p}> Name </Text>
          <Text style={styles.p}> Go do work </Text>
          <Button
            title="Done"
            // onPress={() => {props.navigation.navigate('Root', {
            //   screen: 'HomeMenu'})}}
          />
      </View>

      //   <Text>Add New Preset</Text>
      //   <Text>Icon 
      //     icon={({color, size}) => (
      //           <Icon 
      //           name="pencil-plus" 
      //           color={color}
      //           size={size}
      //           />)}
      //   </Text>
      //   <Button
      //     title="Click Here"
      //     onPress={() => alert('Button Clicked!')}
      //   />
      // </View>
    );
};

export default PresetScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });