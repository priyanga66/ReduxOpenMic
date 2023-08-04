import React from 'react';
import { SafeAreaView, View } from 'react-native';
import CartComponent from '../components/CartComponent'
import ProductListComponent from '../components/ProductListComponent';

function HomeScreen({ navigation }) {

    const renderProduct = (item) => {
        console.log("Render", item)
        navigation.navigate("ProductDetailsScreen", { productData: item })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <CartComponent />
                <ProductListComponent viewProduct={renderProduct} />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;