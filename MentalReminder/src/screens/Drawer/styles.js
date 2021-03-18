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
        flex: 1,
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

    title: { 
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 30,
    },

    button: { 
        fontSize: 19,
        marginBottom: 300,
        borderRadius: 27,
        paddingTop: 13,
        paddingBottom: 13,
        marginRight: 67,
        marginLeft: 30,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
});


export default styles;