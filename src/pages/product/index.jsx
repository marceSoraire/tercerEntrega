import React from "react";
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { PRODUCTS } from "../../constants";

const Product =({ route })=> {
    
    const { productId } = route.params;
    const product = PRODUCTS.find((product)=> product.id === productId);
    
    return ( 
        <View style={styles.container}>
            <Image resizeMode="contain" source={{uri: product.image}} style={styles.image}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>USD {product.price}</Text>
            <Text style={styles.weight}>{product.weight}</Text>
        </View>
    )
};

export default Product;