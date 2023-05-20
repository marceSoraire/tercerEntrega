import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        /**EL StatusBar nos permite dejar dentro de zona segura el contenido */
        paddingTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: 20,
        fontFamily: 'regular',
    },
})