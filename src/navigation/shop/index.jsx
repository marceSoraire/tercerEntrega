import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Category, Init, Product, Products } from '../../pages';
import { COLORS } from '../../constants/index';

const Stack = createNativeStackNavigator();

const ShopNavigator =()=> {
    return (
        <Stack.Navigator 
            initialRouteName='Init'
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle: { fontFamily: 'medium'}
            }}>
            <Stack.Screen name='Init' component={Init} options={{ headerShown: false}}/>
            <Stack.Screen name='Category' component={Category}/>
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