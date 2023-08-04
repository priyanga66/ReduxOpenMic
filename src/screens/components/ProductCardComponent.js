import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Rating from './Rating/Rating';
import Color from '../../utils/Color';
function ProductCardComponent({ productData, cancelClicked }) {

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: productData.IMAGE }}

                    />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>
                        {productData.PRODUCT_NAME}
                    </Text>
                    <Text style={styles.price}>
                        {productData.PRODUCT_DESCRIPTION}{' '}
                    </Text>
                    <View
                        style={{
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}>
                        <Rating />
                    </View>
                    <View style={styles.productPrice}>
                        <Text style={styles.productName}>
                            {'\u20B9'}
                            {productData.PRODUCT_PRICE}
                        </Text>
                    </View>
                    <Text style={styles.price}>MRP incl. of all taxes </Text>
                    <View
                        style={{
                            width: '100%',
                            borderTopWidth: 1,
                            borderBottomColor: 'gray',
                            opacity: 0.2,
                            marginTop: 10,
                        }}
                    />

                    <View style={styles.productInformation}>
                        <View style={{ padding: 5 }}>
                            <Text style={styles.productText}>Product ID:</Text>
                            <Text style={styles.productText}>Color:</Text>
                            <Text style={styles.productText}>Size:</Text>
                            <Text style={styles.productText}>Fabric:</Text>
                            <Text style={styles.productText}>MFD:</Text>
                            <Text style={styles.productText}>PKD:</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={styles.productTextInfo}>
                                {productData.PRODUCT_ID}
                            </Text>
                            <Text style={styles.productTextInfo}>
                                {productData.COLOR}
                            </Text>
                            <Text style={styles.productTextInfo}>
                                {productData.SIZE}
                            </Text>
                            <Text style={styles.productTextInfo}>
                                {productData.FABRIC}
                            </Text>
                            <Text style={styles.productTextInfo}>{productData.MFD}</Text>
                            <Text style={styles.productTextInfo}>{productData.PKD}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: Color.YELLOW }]}
                    onPress={() => { cancelClicked() }}>
                    <Text
                        style={{
                            color: Color.black,
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat-Medium',
                        }}>
                        CANCEL
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        cancelClicked()
                    }}>
                    <Text
                        style={{
                            color: Color.white,
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat-Medium',
                        }}>
                        ADD TO CART
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ProductCardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Color.white,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    imageContainer: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productInformation: {
        flexDirection: 'row',
    },
    productText: {
        color: Color.black,
        fontSize: 16,
        fontWeight: '500',
    },
    productTextInfo: {
        color: Color.gray,
        fontSize: 16,
    },
    image: {
        height: undefined,
        width: 200,
        borderRadius: 5,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    productDetails: {
        width: '100%',
        margin: 10,
    },
    productName: {
        fontSize: 19,
        color: Color.black,
        fontWeight: '700',
        fontFamily: 'Montserrat-Bold',
    },
    productDescription: {
        fontSize: 16,
        fontWeight: '400',
    },
    productPrice: {
        flexDirection: 'row',
        marginTop: 20,
    },
    price: {
        color: 'black',
        fontSize: 16,
    },
    discountPrice: {
        color: 'red',
        fontSize: 20,
        textDecorationLine: 'line-through',
    },
    productFabric: {
        color: 'black',
        fontSize: 17,
    },
    productFabricInfo: {
        color: 'gray',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    productColor: {
        marginTop: 10,
        color: 'black',
        fontSize: 17,
        flexDirection: 'row',
    },

    navHeader: {
        backgroundColor: Color.white,
    },

    navHeaderTitle: {
        color: Color.tabBarLabelColor,
        alignSelf: 'center',
    },
    buttonStyle: {
        width: '45%',
        height: 40,
        backgroundColor: Color.tabBarLabelColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
});