import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 100,
        backgroundColor: COLORS.white,
        borderWidth: 0.2,
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22, 
        elevation: 3,
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,    
    },
    headerContainer: {},
    date: {
        fontSize: 16,
        fontFamily: 'medium',
        color: COLORS.text,
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {},
    total: {
        fontSize: 15,
        fontFamily: 'bold',
        color: COLORS.text,
    },
})