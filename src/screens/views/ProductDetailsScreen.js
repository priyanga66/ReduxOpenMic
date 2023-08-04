import React from 'react';
import { SafeAreaView, View } from 'react-native';
import CartComponent from '../components/CartComponent'
import ProductCardComponent from '../components/ProductCardComponent';

function ProductDetailsScreen({ navigation, route: { params } }) {

    const onClickCancel = () => {
        navigation.navigate("HomeScreen");
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <CartComponent />
                <ProductCardComponent productData={params.productData} cancelClicked={onClickCancel} />
            </View>
        </SafeAreaView>
    );

}

export default ProductDetailsScreen;