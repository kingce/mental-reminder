import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PreferenceScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Preference Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});