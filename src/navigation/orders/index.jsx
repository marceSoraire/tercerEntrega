import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../../pages";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const OrdersNavigator=()=> {
    return(
        <Stack.Navigator 
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: { fontFamily: 'medium'}
            }}>
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;