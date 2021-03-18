import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';

import Router from './src/navigation/Router';

const db = SQLite.openDatabase('reminder.db');

export default function App() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists reminders (name text primary key not null, time_day text not null);');
    }, 
    error => {console.log(error)}
    );

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
