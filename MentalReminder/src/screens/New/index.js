import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert, TouchableOpacity, TextInput, ScrollView, ImageBackground, View, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faCoffee, faSpa, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';


const NewScreen = (props) => { 

    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');

    const onTimeChange = (event, selectedTime) => { 
        const currentDate = selectedTime || date;
        Alert.alert('current date is ' + currentDate);
    }

    const setReminderName = (str) => { 
        setName(str);
        Alert.alert('Name set to: ' + str);
    }

    const addNewReminder = () => { 
        if(text == '') { 
            Alert.alert('name is ' + name + ' and the date is ' + date);
        } else { 
            Alert.alert("hehe hidden path: " + text);
        }
        props.navigation.navigate('Home', {
            screen: 'Home'})
    }

    const setReminderCustom = (text) => { 
        setText(text);
    }

    const addNote = () => {
        <TextInput style={{marginLeft: 17, paddingLeft: 5, height: 30, borderColor: 'gray', borderWidth: 1, width: 230 }}
            {...props}
            editable
            name = "Notes"
            placeholder = "Add Notes"
        />
    }

    return ( 
        <View>
            <ImageBackground 
                source = { require('../../../assets/images/header.png')}
                style={styles.image}
            >
            </ImageBackground>

        <ScrollView style={styles.body}>
            <Text style={styles.title}>New reminder</Text>
            <Text style={styles.p}>What do you want to remember?</Text>
            <View style={styles.presetBlock}>
                <View style={styles.preset}>
                    <TouchableOpacity onPress={() => setReminderName("Drink water")}>
                    <Text>
                        <FontAwesomeIcon icon={ faCoffee } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   Drink water</Text>
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.preset}>
                    <TouchableOpacity onPress={() => setReminderName("Water plants")}>
                    <Text>
                        <FontAwesomeIcon icon={ faCoffee } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   Water plants</Text>
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.preset}>
                    <TouchableOpacity onPress={() => setReminderName("HW due")}>
                    <Text>
                        <FontAwesomeIcon icon={ faBriefcase } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   HW due</Text>
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.preset}>
                    <TouchableOpacity onPress={() => setReminderName("Meditate")}>
                    <Text>
                        <FontAwesomeIcon icon={ faSpa } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   Meditate</Text>
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.customPreset}>
                    <Text>
                        <FontAwesomeIcon icon={ faPlus } size={35} color="black" style={styles.presetIcon} />
                    </Text>
                    <TextInput
                        {...props}
                        editable
                        maxLength={30}
                        style={{ marginLeft: 17, paddingLeft: 5, height: 30, borderColor: 'gray', borderWidth: 1, width: 230 }}
                        placeholder="Custom preset"
                        onChangeText={(text) => setReminderCustom(text)}
                    />
                </View>
            </View>

            <View style={styles.time}>
                <Text style={styles.p}>When do you want to be reminded?</Text>
                <DateTimePicker 
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    display="spinner"
                    onChange={onTimeChange}
                />
            </View>
            
            <View style={styles.times}>
                <Text style={styles.p}>Add Note / Description {"\n"}</Text>
                <TextInput style={{marginLeft: 17, paddingLeft: 5, height: 30, borderColor: 'gray', width: 230 }}
                    {...props}
                    editable
                    name = "Notes"
                    placeholder = "Add Notes"
                />
                <Text style={styles.notes}></Text>
            </View>
            
            <View style={styles.submit}>
                <TouchableOpacity onPress={addNewReminder}>
                    <Text style={styles.button}>Add New Reminder</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
        </View>
    );
};

export default NewScreen;
