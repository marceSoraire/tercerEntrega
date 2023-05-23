import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
        	width: 0,
        	height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    name: {
        fontSize: 20,
        fontFamily: 'semiBold',
        color: COLORS.text,
    },
    image:{
        width: 250,
        height: 150,
    },
});