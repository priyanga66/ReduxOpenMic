import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Asset from '../../assets/Asset'

function CartComponent(props) {
    return (
        <View style={styles.parentContainer}>
            <View style={{ flexDirection: 'row', flex: 4, alignItems: 'center', justifyContent: 'flex-start', marginLeft: 20 }}>
                <Text>Cart Details</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1.5 }}>
                <Image source={Asset.cartIcon} style={styles.iconStyle}></Image>
                <View style={styles.badgeView}>
                    <Text>{"12"}</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    parentContainer: {
        height: 70,
        backgroundColor: 'pink',
        flexDirection: 'row'
    },
    badgeView: {
        height: 35,
        width: 35,
        borderRadius: 35 / 2,
        borderColor: '#162450',
        borderWidth: 1,
        backgroundColor: '#F6DF8C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: 45,
        height: 50,
        alignSelf: 'center'
    }
})
export default CartComponent;