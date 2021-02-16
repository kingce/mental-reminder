import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import 'react-native-gesture-handler';

import Router from './src/navigation/Router';

export default function App() {
  return (
      <>
          <Router />
      </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent: 'center',
  },


});
