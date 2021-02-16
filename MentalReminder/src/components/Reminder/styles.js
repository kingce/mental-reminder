import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( { 
    container: { 
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#313131',
        width: '80%',
        marginLeft: '10%',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    name: { 
        fontSize: 30,
        color: "#fff",
    },

    icon: { 
        marginRight: 15,
    },

    time: { 
        fontSize: 20,
        color: "#fff",
        marginLeft: 15,
    }


});

export default styles;
