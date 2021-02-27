import React from 'react';
import { TextInput, ScrollView, ImageBackground, View, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faCoffee, faSpa, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';


const NewScreen = (props) => { 
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
                    <Text>
                        <FontAwesomeIcon icon={ faCoffee } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   Drink coffee</Text>
                    </Text>
                </View>
                <View style={styles.preset}>
                    <Text>
                        <FontAwesomeIcon icon={ faCoffee } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   Drink water</Text>
                    </Text>
                </View>
                <View style={styles.preset}>
                    <Text>
                        <FontAwesomeIcon icon={ faBriefcase } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   HW due</Text>
                    </Text>
                </View>
                <View style={styles.preset}>
                    <Text>
                        <FontAwesomeIcon icon={ faSpa } size={35} color="black" style={styles.presetIcon} />
                        <Text style={styles.presetText}>   Meditate</Text>
                    </Text>
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
                        value="Custom preset"
                    />
                </View>
            </View>

            <View style={styles.time}>
                <Text style={styles.p}>When do you want to be reminded?</Text>
                
            </View>
        </ScrollView>

        </View>
    );
};

export default NewScreen;
