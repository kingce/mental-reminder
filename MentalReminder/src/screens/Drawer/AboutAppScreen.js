import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from "./styles";

const AboutAppScreen = () => {
  return (
    <View style={styles.headerText}>
      <Text style={styles}> This app is about reminding user based on their reminder lists that
                            have been created. </Text>
    </View>
  );
};

export default AboutAppScreen;

// const DefaultScreen = () => {
//     return (
//       <View style={styles.headerText}>
//         <Text>Defaults Screen</Text>
//         {/* <Button
//           title="Click Here"
//           onPress={() => alert('Button Clicked!')}
//         /> */}
//       </View>
//     );
// };

// export default DefaultScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });