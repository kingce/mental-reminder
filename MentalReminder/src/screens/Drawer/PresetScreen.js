import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PresetScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Preset Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default PresetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});