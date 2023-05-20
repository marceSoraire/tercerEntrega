import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Category, Product, Products } from '../../pages';
import { COLORS } from '../../constants/index';

const Stack = createNativeStackNavigator();

const ShopNavigator =()=> {
    return (
        <Stack.Navigator 
            initialRouteName='Category'
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: { fontFamily: 'medium'}
            }}>
            <Stack.Screen name='Category' component={Category} options={{ headerShown: false}}/>
            <Stack.Screen 
                name='Products' 
                component={Products}
                options={({ route})=>({
                    title: route.params.name,
                })}/>
            <Stack.Screen 
                name='Product' 
                component={Product}
                options={({ route})=>({
                    title: route.params.name,
                })}/>
        </Stack.Navigator>
    )
};

export default ShopNavigator;