import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import ShopNavigator from '../shop';
import OrdersNavigator from '../orders';
import CartNavigator from '../cart';
import { COLORS } from '../../constants';

const BottomTab = createBottomTabNavigator();

const TabsNavigator =()=> {
    return(
        <BottomTab.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'regular',
                    fontSize: 14,
                    backgroundColor: COLORS.secondary,
                },
                tabBarActiveTintColor: COLORS.text,
                tabBarInactiveTintColor: COLORS.tabs,
                tabBarIconStyle: {
                    fontSize: 22,
                }
            }}>
            <BottomTab.Screen 
            name='ShopTab' 
            component={ShopNavigator}
            options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={focused ? 'home' : 'home-outline' } size={size} color={color} />
                )
            }}/>
            <BottomTab.Screen 
            name='OrdesTab'
            component={OrdersNavigator}
            options={{
                tabBarLabel: 'Orders',
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={focused ? 'file-tray' : 'file-tray-outline' } size={size} color={color} />
                )
            }}/>
            <BottomTab.Screen 
            name='CartTab' 
            component={CartNavigator}
            options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={focused ? 'cart' : 'cart-outline' } size={size} color={color} />
                )
            }}/>
        </BottomTab.Navigator>
    )
};

export default TabsNavigator;