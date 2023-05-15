import React from "react";
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const Category =({ navigation })=> {
    return ( 
       <View style={styles.container}>
        <Text style={styles.title}>Category</Text>
        <Button title="Go to Products" onPress={()=> navigation.navigate('Products')}/>
       </View>
    )
};

export default Category;