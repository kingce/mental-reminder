import { StyleSheet, Dimensions } from 'react-native';
import { createNavigationContainer } from 'react-navigation';

const win = Dimensions.get('window');
const ratio = win.width/1129;

const styles = StyleSheet.create({ 

    headerText: { 
        marginLeft: 30,
        marginTop: 20,
        paddingBottom: 30,
        alignItems: 'center', // Used to set Text Component Horizontally Center
    },
    h1: { 
        fontSize: 45,
        fontWeight: 'normal',
    },

    day: { 
        marginLeft: 30,
        marginTop: 20,
        fontSize: 45,
    },

    p: { 
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 30,
    },
    scrollView: { 
        width: '100%',
    },
});


export default styles;
