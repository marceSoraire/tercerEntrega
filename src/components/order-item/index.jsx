import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { COLORS } from "../../constants";

const OrderItem = ({ item }) => {

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{item.name}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.body}>
                    <Text style={styles.total}>{item.description}</Text>
                    <Text style={styles.total}>edad: {item.age}</Text>
                </View>
                <Ionicons 
                    name={item.active ? 'checkmark-circle' : 'trash'} 
                    size={22} 
                    color={item.active ? COLORS.green : COLORS.red}/>
            </View>
        </View>
    )
}

export default OrderItem;