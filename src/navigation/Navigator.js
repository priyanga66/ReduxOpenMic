import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/views/HomeScreen';
import ProductDetailsScreen from '../screens/views/ProductDetailsScreen';
const Stack = createStackNavigator();

function Navigator(props) {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, headerMode: "screen" }}
            initialRouteName={"HomeScreen"}

        >

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
}

export default Navigator;