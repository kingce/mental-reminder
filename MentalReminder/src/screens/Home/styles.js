import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/1129;

const styles = StyleSheet.create({ 

    image: { 
        width: win.width,
        height: 489 * ratio,
        resizeMode: 'contain',
    },

    headerText: { 
        marginLeft: 30,
        marginTop: 20,
        paddingBottom: 30,
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
        fontSize: 30,
    },
    scrollView: { 
        width: '100%',
    }
});


export default styles;
