import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    footerContainer: {
        backgroundColor: COLORS.white,
        borderTopColor: COLORS.primary,
        borderTopWidth: 4,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    buttomConfirm: {
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonConfitmText: {
        color: COLORS.text,
        fontFamily: 'medium',
        fontSize: 14,
    },
    totalContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalText: {
        color: COLORS.text,
        fontFamily: 'medium',
        fontSize: 14,
    },
    totalPrice: {
        color: COLORS.text,
        fontFamily: 'bold',
        fontSize: 15,
    },
})