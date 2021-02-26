import React from "react";
import { ScrollView, ImageBackground, Image, View, Text, Dimensions} from "react-native";
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import styles from './styles';

import userData from './../../../assets/data/user.js';
const user = userData[0];

const FirstRoute = () => (
    <ScrollView style={[styles.scene ]}>
        <Text style={styles.p}>Here's some quick stats to see just how far you've come since joining!</Text>
        <View style={styles.statHighlight}>
            <Text>
                <Text style={styles.numberHighlight}>{user.completedReminders} </Text>
                <Text style={styles.p}>reminders finished</Text>
            </Text>
        </View>
        <View style={[styles.statHighlight]}>
            <Text>
                <Text style={styles.numberHighlight}>{user.uniqueRemindersLogged} </Text>
                <Text style={styles.p}>unique reminders logged</Text>
            </Text>
        </View>
        <Text style={styles.p}>We're so proud of you and your hard work. Keep at it!</Text>
        <View style={{ height: 100}} />
    </ScrollView>
);

const SecondRoute = () => ( 
    <ScrollView style={[styles.scene ]}>
        <Text style={[styles.bigText]}>
            It's okay to not be okay.
        </Text>
        <Text style={[styles.p]}>Here are some resources if you're feeling down! &#10084;&#65039;</Text>
        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 15, marginBottom: 15 }} />
        <View style={styles.resource}>
            <Text style={styles.resourceTitle}>National Suicide Prevention Lifeline</Text>
            <Text style={styles.resourceContent}>1-800-273-82555</Text>
        </View>
        <View style={styles.resource}>
            <Text style={styles.resourceTitle}>National Hope Line Network</Text>
            <Text style={styles.resourceContent}>1-800-784-2433</Text>
        </View>
        <View style={styles.resource}>
            <Text style={styles.resourceTitle}>National Council on Alcoholism and Drug Dependence</Text>
            <Text style={styles.resourceContent}>1-800-273-82555</Text>
        </View>
        <View style={styles.resource}>
            <Text style={styles.resourceTitle}>National Eating Dissorder Association Helpline</Text>
            <Text style={styles.resourceContent}>1-800-931-2237</Text>
        </View>
        <View style={{ height: 100}} />
    </ScrollView>
);


const initialLayout = { width: Dimensions.get('window').width };

const ProfileScreen = (props) => { 

    const [index, setIndex ] = React.useState(0);
    const [ routes ] = React.useState([ 
        { key: 'first', title: 'Statistics' },
        { key: 'second', title: 'Resources' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute
    });

    const renderTabBar = props => (
        <TabBar 
            {...props}
            indicatorStyle={{ backgroundColor: '#262626',  height: '7%', marginLeft: '10%', marginRight: '10%', width: '20%'}}
            activeColor="black"
            inactiveColor="#727272"
            style={{ backgroundColor: 'transparent',  marginTop: 20}}
        />
    );

    return (
        <>
        <View>
            <ImageBackground 
                source={require('../../../assets/images/header.png')}
                style={styles.image}
            >
            </ImageBackground>

            <View style={styles.profileInfo}>
                <Image style={styles.profilePic} source={require('./../../../assets/images/default-profile.png')} />
                <Text style={styles.h1}>{user.name}</Text>
                <Text style={styles.joinedDate}>Joined {user.dateJoined}</Text>
            </View>
        </View>

        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
        </>
    );
};

export default ProfileScreen;
