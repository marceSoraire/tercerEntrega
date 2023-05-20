import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { ORDERS } from '../../constants/index'
import OrderItem from "../../components/order-item";

const Orders =()=> {

    const keyExtractor = (item) => item.id.toString();
    const onRemove =(id)=> {
        console.warn(id);
    }
    const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove}/>
    return (
        <View style={styles.container}>
            <FlatList
                data={ORDERS}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

export default Orders;