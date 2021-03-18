import React from 'react';
import {useState} from "react";
import { SafeAreaView, ScrollView, ImageBackground, View, Text, Animated, TouchableHighlight, TouchableOpacity, StatusBar, } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from './styles';
import Reminder from './../../components/Reminder';

import reminders from './../../../assets/data/reminders.js';

const reminder1 = reminders[0];
const reminder2 = reminders[1];


const HomeScreen = (props) => { 

    const [listData, setListData] = useState(
        reminders.map((ReminderItem, index) => ({ 
            key: `${index}`,
            title: ReminderItem.name,
            time: ReminderItem.time,
        })),
    );

    const closeRow = (rowMap, rowKey) => { 
        if(rowMap[rowKey]) { 
            rowMap[rowKey].closeRow();
        }
    }


    const deleteRow = (rowMap, rowKey) => { 
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key == rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    }

    const VisibleItem = props => { 
        const {data} = props;
        return (
            <View styles={styles.rowFront}>
            <TouchableHighlight style={styles.rowFrontVisible}>
            <View>
                <Text style={styles.title} numberOfLines={1}>{data.item.title} at {data.item.time}</Text>
            </View>
            </TouchableHighlight>
            </View>
        );
    }

    const renderItem=(data, rowMap) => { 
        return ( 
            <VisibleItem data={data} />
        );
    };

    const HiddenItemWithActions = props => { 
        const {onClose, onDelete} = props;

        return (
            <View style={styles.rowBack}>
                <Text>Snooze</Text>
                <TouchableOpacity style={[styles.backRightbtn, styles.backRightBtnRight]} onPress={onDelete}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderHiddenItem = (data, rowMap) => { 
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };

    return ( 

        <View>

            <ImageBackground
                source={require('../../../assets/images/header.png')}
                style={styles.image}
            >

            </ImageBackground>

            {/* <View style={styles.container}>
                <Button
                    title="Go to details screen"
                    onPress={() => navigation.navigate("Details")}
                />
            </View> */}
           
           {/* <Drawer></Drawer> */}
            

            <View style={styles.headerText}>
                <Text style={styles.h1}>Hey, USER!</Text>
                <Text style={styles.p}>Here are your reminders.</Text>
            </View>

            <SafeAreaView>
                <ScrollView style={styles.scrollView}>

                    <Text style={styles.day}>Today </Text>

                    <SwipeListView
                        data={listData}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={90}
                        rightOpenValue={-90}
                    />
                    
                </ScrollView>
            </SafeAreaView>
        </View>
    );


};

export default HomeScreen;
