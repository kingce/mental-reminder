import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/1129;

const styles = StyleSheet.create({ 
    image: { 
        width: win.width,
        height: 489 * ratio,
        resizeMode: 'contain',
    },
    profilePic: { 
        width: 150,
        height: 150,
        marginTop: -70,
        marginLeft: 20
    },
    h1: { 
        fontSize: 45,
        marginLeft: 37,
        fontWeight: 'bold'
    },
    joinedDate: { 
        fontSize: 17,
        paddingTop: 7,
        marginLeft: 37 
    }




});
export default styles;
