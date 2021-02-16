# mental-reminder
Class project for CSCI 436 - Technology for Social Good


## Getting started for devs

You need expo-cli and react-native obviously. Honestly i'm like 99% sure that if you just clone and then npm install, it'll take care of the dependencies for you? 


### Create a component

Always start off by importing React and all the components from React Native that you need (usually just View and Text). 


### Adding component

The app's entry point is App.js in the root directory. At the top, import your component (for example, to import the home screen component, 'import HomeScreen from './src/screens/Home'). 

## General notes for noobs

'View' element is similar to a 'div' if you do web dev. 

Make sure that when you declare a style e.g. style={styles.whateverTheFuck}, you declare it in the const styles down below. God BLESS it's all sorta kinda CSS. 

Might be good to use 'React Navigation v5' with different tabs 


also look into React Native Vector icons https://github.com/oblador/react-native-vector-icons


IM USING expo-google-fonts TO GET THE FONTS WE NEED IDK IF THIS IS RIGHT



# Style/Component Documentation

### reminderWrapper 
A wrapper for all of the reminder objects on the home screen. MIGHT be recycled for the recurring reminders page, idk. 
