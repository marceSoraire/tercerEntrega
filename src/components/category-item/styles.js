import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    name: {
        fontSize: 18,
        fontFamily: 'medium',
        color: COLORS.text,
    },
});