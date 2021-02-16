import React from "react";
import { View, Text } from "react-native";
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Reminder = (props) => { 

    const reminder = props.reminder;

    return ( 
        <View style={styles.container}>

            {/* wtf are these comments */}

            <FontAwesomeIcon icon={ faCoffee } size={35} color="white" style={styles.icon} />

            <Text style={styles.name}>
                {reminder.name} 
            </Text>

            <Text style={styles.time}>
                at {reminder.dueAt} {reminder.ampm}
            </Text>

        </View>
    );
};


export default Reminder;
