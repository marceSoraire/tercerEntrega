import React from "react";
import { styles } from './styles';
import { View, Text, Image } from "react-native";

const Header =()=>{
    return(
        <View style={styles.headersContainers}>
            <Image 
                source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Farofusa.com%2Fproject%2Fnueva-era-club%2F&psig=AOvVaw1YhPsiqcVcsasGmPr0J_fb&ust=1684183396861000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiX8OPY9f4CFQAAAAAdAAAAABAE'}}
                style={styles.logo}
            />
            <Text></Text>
        </View>
    )
}

export default Header;