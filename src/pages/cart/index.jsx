import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { CART } from "../../constants";
import { CartItem } from '../../components/index';

const Cart =()=> {
    const TOTAL = 2000;
    const onRemove =(id)=>{
        console.warn(id);
    }
    const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />
    const keyExtractor = (item) => item.id.toString();
    
    return (
        <View style={styles.container}>
            <FlatList
                data= {CART}
                renderItem= {renderItem}
                keyExtractor= {keyExtractor}
                style= {styles.listContainer}
            />
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.buttomConfirm} onPress={()=> null}>
                    <Text style={styles.buttonConfitmText}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total:</Text>
                        <Text style={styles.totalPrice}>{TOTAL}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;