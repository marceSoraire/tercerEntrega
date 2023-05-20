import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 120,
    },
    containerTouchable: {
        flex: 1,
        backgroundColor: COLORS.primary,
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height:1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,        
    },
    name: {
        fontSize: 14,
        fontFamily: 'regular',
        textAlign: 'center',
    },
    price: {
        fontSize: 15,
        fontFamily: 'bold',
        textAlign: 'center',
    },
    weight: {
        fontSize: 12,
        fontFamily: 'regular',
        textAlign: 'center',
    },
})