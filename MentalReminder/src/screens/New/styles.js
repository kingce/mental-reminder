import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/1129;

const styles = StyleSheet.create({ 
    image: { 
        width: win.width,
        height: 489 * ratio,
        resizeMode: 'contain',
    },


});
export default styles;
