import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Category, Product, Products } from '../../pages';

const Stack = createNativeStackNavigator();

const MainNavigator =()=> {
    return (
        <Stack.Navigator initialRouteName='Category'>
            <Stack.Screen name='Category' component={Category} options={{ headerShown: false}}/>
            <Stack.Screen name='Products' component={Products}/>
            <Stack.Screen name='Product' component={Product}/>
        </Stack.Navigator>
    )
};

export default MainNavigator;