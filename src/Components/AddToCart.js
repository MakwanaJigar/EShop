import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import BackArrow from '../Assets/ProductDetail/left.png';
import Cart from '../Assets/HomePage/Cart.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const AddToCart = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const removeFromCart = (index) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: index });
    };

    return (
        <View style={{ height: '100%' }}>
            {/* TOPBAR */}
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', height: 50, columnGap: 60, backgroundColor: '#FFC300' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={BackArrow} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <Text style={{ color: "black", fontWeight: 'bold' }}>My Cart</Text>
                <TouchableOpacity>
                    <View>
                        <Image source={Cart} style={{ width: 26, height: 26 }} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* ADD TO CART PRODUCT LIST */}
            <ScrollView style={{marginTop:20}}>
                {cartItems.map((item, index) => (
                    <View style={{margin:8}}>
                    <View key={index} style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', borderWidth: 0.3, borderRadius: 10, width: "90%", alignSelf: 'center', padding: 10}}>
                        <Image source={item.image || require('../Assets/Bags/Bag2.png')} style={{ width: 100, height: 100 }} />
                        <View>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.brand}</Text>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.model}</Text>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.price}</Text>
                            <TouchableOpacity style={{ backgroundColor: 'red', height: 30, alignItems: 'center', justifyContent: 'center' }} onPress={() => removeFromCart(index)}>
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}

export default AddToCart;
