import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { COLORS } from "../../constants";

const OrderItem = ({ item, onRemove }) => {

    const formatDate = (time)=>{
        const date = new Date(time);
        return date.toLocaleDateString();
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.body}>
                    <Text style={styles.total}>USD {item.total}</Text>
                </View>
                <TouchableOpacity onPress={()=> onRemove(item.id)}>
                    <Ionicons name='trash' size={22} color={COLORS.red}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderItem;