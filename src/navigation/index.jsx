import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./main/index";

const Navigation =()=>{
    return(
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    )
};

export default Navigation;