import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserInfoScreen = () => {
    return (
      <View style={styles.container}>
        <Text>UserInfo Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});