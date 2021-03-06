import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/1129;

const styles = StyleSheet.create({ 
    image: { 
        width: win.width,
        height: 489 * ratio,
        resizeMode: 'contain',
    },

    body: { 
        paddingTop: 50,
        paddingLeft: 37
    },

    title: { 
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 30,
    },

    preset: { 
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15
    },

    presetIcon: { 
        width: 30,
    },

    presetText: { 
        fontSize: 19
    },
    presetBlock: { 
        paddingTop: 20,
        paddingBottom: 20
    },

    customPreset: { 
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15
    },

    time: { 
        marginTop: 30,
        marginBottom: 30
    },


    p: { 
        fontSize: 19,
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

    notes: {
        fontSize: 19,
        paddingBottom: 30
    }


});
export default styles;
