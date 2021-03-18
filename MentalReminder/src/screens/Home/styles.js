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
    },
    backTextWhite: {
            color: '#FFF',
          },
      rowFront: {
              backgroundColor: '#FFF',
              borderRadius: 5,
              height: 60,
              margin: 5,
              marginBottom: 15,
              shadowColor: '#999',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            },
      rowFrontVisible: {
              backgroundColor: '#FFF',
              borderRadius: 5,
              height: 60,
              padding: 10,
              marginBottom: 15,
            },
      rowBack: {
              alignItems: 'center',
              backgroundColor: '#DDD',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 15,
              margin: 5,
              marginBottom: 15,
              borderRadius: 5,
            },
      backRightBtn: {
              alignItems: 'flex-end',
              bottom: 0,
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              width: 75,
              paddingRight: 17,
            },
      backRightBtnLeft: {
              backgroundColor: '#1f65ff',
              right: 75,
            },
      backRightBtnRight: {
              backgroundColor: 'red',
              right: 0,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            },
      trash: {
              height: 25,
              width: 25,
              marginRight: 7,
            },
      title: {
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 5,
              color: '#666',
            },
});


export default styles;
