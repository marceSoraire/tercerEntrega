import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> onSelected(item)}>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <Image source={{uri: item.image}} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
};

export default CategoryItem;