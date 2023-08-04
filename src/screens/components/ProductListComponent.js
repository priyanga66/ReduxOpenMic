import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import Asset from '../../assets/Asset';
function ProductListComponent(props) {
    const data = {
        "QR_CODES": [
            {
                "PRODUCT_ID": "prod#10",
                "PRODUCT_NAME": "DANVOUY Womens T Shirt Casual Cotton Short",
                "PRODUCT_DESCRIPTION": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
                "PRODUCT_PRICE": 875,
                "PRODUCT_CATEGORY": "women's clothing",
                "IMAGE": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                "COLOR": "red",
                "SIZE": "L",
                "FABRIC": "Cotton",
                "MFD": "12/Jul/2020",
                "PKD": "13/AUG/2022"
            },
            {
                "PRODUCT_ID": "prod#9",
                "PRODUCT_NAME": "Opna Women's Short Sleeve Moisture",
                "PRODUCT_DESCRIPTION": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
                "category": "women's clothing",
                "PRODUCT_PRICE": 875,
                "PRODUCT_CATEGORY": "women's clothing",
                "IMAGE": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
                "COLOR": "red",
                "SIZE": "L",
                "FABRIC": "Polyester",
                "MFD": "12/Jul/2020",
                "PKD": "13/AUG/2022"
            },
            {
                "PRODUCT_ID": "prod#1",
                "PRODUCT_NAME": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                "PRODUCT_DESCRIPTION": "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
                "PRODUCT_PRICE": 1000,
                "PRODUCT_CATEGORY": "Clothing",
                "IMAGE": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
                "COLOR": "BLUE",
                "SIZE": "XXL",
                "FABRIC": "NULL",
                "MFD": "12/JUL/2020",
                "PKD": "13/AUG/2022"
            },
            {
                "PRODUCT_ID": "prod#8",
                "PRODUCT_NAME": "MBJ Women's Solid Short Sleeve Boat Neck V ",
                "PRODUCT_DESCRIPTION": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
                "PRODUCT_PRICE": 1600,
                "PRODUCT_CATEGORY": "women's clothing",
                "IMAGE": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                "COLOR": "white",
                "SIZE": "M",
                "FABRIC": "Rayon",
                "MFD": "12/Jul/2020",
                "PKD": "13/AUG/2022"
            },
            {
                "PRODUCT_ID": "prod#7",
                "PRODUCT_NAME": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                "PRODUCT_DESCRIPTION": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
                "PRODUCT_PRICE": 2700,
                "PRODUCT_CATEGORY": "women's clothing",
                "IMAGE": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
                "COLOR": "purple",
                "SIZE": "L",
                "FABRIC": "woollen",
                "MFD": "12/FEB/2020",
                "PKD": "13/MAR/2022"
            },
            {
                "PRODUCT_ID": "prod#6",
                "PRODUCT_NAME": "Mens Cotton Jacket",
                "PRODUCT_DESCRIPTION": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                "PRODUCT_PRICE": 2500,
                "PRODUCT_CATEGORY": "men's clothing",
                "IMAGE": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "COLOR": "beige",
                "SIZE": "L",
                "FABRIC": "Synthetic",
                "MFD": "12/FEB/2020",
                "PKD": "13/MAR/2022"
            },
            {
                "PRODUCT_ID": "prod#5",
                "PRODUCT_NAME": "Mens Casual Premium Slim Fit T-Shirts ",
                "PRODUCT_DESCRIPTION": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. The Henley style round neckline includes a three-button placket.",
                "PRODUCT_PRICE": 1200,
                "PRODUCT_CATEGORY": "men's clothing",
                "IMAGE": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "COLOR": "red",
                "SIZE": "XXL",
                "FABRIC": "NULL",
                "MFD": "12/JUL/2020",
                "PKD": "13/AUG/2022"
            }
        ]

    }
    const viewData = (item) => {
        return props.viewProduct(item)
    }
    const renderProductList = ({ item }) => {
        console.log("item::", item);
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 15 }}>
                <View style={{ flex: 1, flexDirection: 'column', }}>
                    <Image
                        source={{ uri: item.IMAGE }}
                        resizeMode={'contain'}
                        style={{ width: 100, height: 90 }}></Image>
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                    }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#162450' }}>
                        {item.PRODUCT_NAME}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        {item.COLOR + ' / ' + item.SIZE}
                    </Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                        {'\u20B9'}
                        {item.PRODUCT_PRICE}
                    </Text>
                </View>
                <TouchableOpacity style={{ flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onPress={() => viewData(item)}>
                    <Image
                        source={Asset.forwardArrowIcon}
                        style={{ width: 25, height: 20 }}
                    ></Image>
                </TouchableOpacity>
            </View >);
    }
    return (
        // <View style={{ flex: 1 }}>
        <FlatList
            data={data?.QR_CODES}
            renderItem={renderProductList}
        />
        // </View>


    );
}

export default ProductListComponent;