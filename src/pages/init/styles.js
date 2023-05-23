import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLORS.black,
        fontFamily: 'bold',
        fontSize: 26,
    },
    text: {
        color: COLORS.text,
        fontFamily: 'medium',
        fontSize: 24,
    },
    image: {
        width: 300,
        height: 300,
    },
})