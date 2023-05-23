import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../../pages";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const CartNavigator=()=> {
    return(
        <Stack.Navigator 
            initialRouteName="Sports"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: { fontFamily: 'medium'}
            }}>
            <Stack.Screen name="Sports" component={Cart} />
        </Stack.Navigator>
    )
}

export default CartNavigator;