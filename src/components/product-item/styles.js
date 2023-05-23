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
        backgroundColor: COLORS.lightGray,
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
        padding: 10,        
    },
    name: {
        fontSize: 16,
        fontFamily: 'medium',
        textAlign: 'center',
    },
    price: {
        fontSize: 15,
        fontFamily: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        fontFamily: 'regular',
        textAlign: 'center',
    },
})