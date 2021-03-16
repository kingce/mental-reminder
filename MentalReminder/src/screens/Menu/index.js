import React from 'react';
import { View, StyleSheet } from 'react-native';
// import {ScrollView, Text, View} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { StackNavigator } from 'react-navigation';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import{ AuthContext } from '../components/context';

export function MenuScreen(props) { 

    const paperTheme = useTheme();

    //const { toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                <Drawer.Section style={styles.drawerSection}>
                    <Text style={styles.preference}> Menu </Text>
                </Drawer.Section>
                    {/* <Drawer.Section style={styles.drawerSection}>
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => {toggleNotification()}}>
                                <View style={styles.preference}>
                                    <Text>Push Notifications</Text>
                                </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                    <Drawer.Section>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="pencil-plus" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Edit preset reminders"
                            onPress={() => {props.navigation.navigate('Preset', {
                                screen: 'PresetScreen'})}}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="pencil" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Edit defaults"
                            onPress={() => {props.navigation.navigate('EditDefault', {
                                screen: 'DefaultScreen'})}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-edit-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Change my user info"
                            onPress={() => {props.navigation.navigate('EditDefault', {
                                screen: 'AboutAppScreen'})}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="square-edit-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Change Preferences"
                            onPress={() => {props.navigation.navigate('EditDefault', {
                                screen: 'AboutAppScreen'})}}
                        /> */}
                    </Drawer.Section>
                    <Drawer.Section>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About this app"
                            onPress={() => {props.navigation.navigate('EditDefault', {
                                screen: 'AboutAppScreen'})}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default MenuScreen;