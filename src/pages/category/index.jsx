import React from "react";
import { FlatList, SafeAreaView } from 'react-native';
import { CATEGORIES } from '../../constants/index';
import { styles } from './styles';
import CategoryItem from "../../components/category-item";

const Category =({ navigation })=> {
    
    const onSelected = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            name: item.name,
        });
    }
    
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}/>
    const keyExtractor = (item) => item.id.toString();
    
    return ( 
       <SafeAreaView style={styles.container}>
        <FlatList
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
       </SafeAreaView>
    )
};

export default Category;