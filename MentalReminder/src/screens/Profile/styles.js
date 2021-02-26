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
    },

    p: { 
        fontSize: 19,
        lineHeight: 33.25,
        paddingTop: 20,
        paddingBottom: 20
    },

    numberHighlight: { 
        color: "#687765",
        fontSize: 50,
        fontWeight: 'bold'
    },

    statHighlight: { 
        marginTop: 15,
        marginBottom: 15
    },

    scene: { 
        padding: 37,
        paddingBottom: 90
    },

    bigText: { 
        color: "#687765",
        fontSize: 50,
    },

    resource: { 
        marginTop: 15,
        marginBottom: 15
    },

    resourceTitle: { 
        fontWeight: 'bold',
        fontSize: 20
    },

    resourceContent: { 
        fontSize: 19,
        paddingTop: 7
    },




});
export default styles;
