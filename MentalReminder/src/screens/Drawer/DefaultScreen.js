import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DefaultScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Defaults Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});