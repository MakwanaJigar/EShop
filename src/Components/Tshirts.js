import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

import Tshirt1 from '../Assets/Tshirts/Tshirt1.png'
import Tshirt2 from '../Assets/Tshirts/Tshirt2.png'
import Tshirt3 from '../Assets/Tshirts/Tshirt3.png'
import Tshirt4 from '../Assets/Tshirts/Tshirt6.jpg'
import Tshirt5 from '../Assets/Tshirts/Tshirt2.png'
import Tshirt6 from '../Assets/Tshirts/Tshirt6.jpg'

import AddCart from '../Assets/Bags/shopping.png'

import Search from '../Assets/Bags/Search.png'
import Arrow from '../Assets/Bags/arrow.png'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { addToCart } from './Redux/Action'
import store from './Redux/Store';


const Tshirts = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const ShowProductDetail = (item) => {
        dispatch(addToCart(item));
        navigation.navigate("ProductDetail", { product: item });
    }

    const goToAddToCart = (item) => {
        store.dispatch(addToCart(item));
        navigation.navigate("AddToCart");
    }


    const TShirtData = [
        {
            id: 1,
            image: Tshirt1,
            brand: "Gucci",
            model: "Gucci",
            price: "$205.65",
            discount: "19%",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0iE_OcFqHuid3WSDuCrvp1uDCwmjeAu2WtYDp4v-RQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR22uWbVJni4a8hTIYqrEcRh7UooVR4pTvQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKfZsey0FV_c0mC2ps47JQ49dmbUcEvu5JA&usqp=CAU"
            ]
        },
        {
            id: 2,
            image: Tshirt2,
            brand: "Gucci",
            model: "Gucci",
            price: "$205.65",
            discount: "19%",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0iE_OcFqHuid3WSDuCrvp1uDCwmjeAu2WtYDp4v-RQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR22uWbVJni4a8hTIYqrEcRh7UooVR4pTvQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKfZsey0FV_c0mC2ps47JQ49dmbUcEvu5JA&usqp=CAU"
            ]
        },
        {
            id: 3,
            image: Tshirt3,
            brand: "Gucci",
            model: "Gucci",
            price: "$205.65",
            discount: "19%",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0iE_OcFqHuid3WSDuCrvp1uDCwmjeAu2WtYDp4v-RQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR22uWbVJni4a8hTIYqrEcRh7UooVR4pTvQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKfZsey0FV_c0mC2ps47JQ49dmbUcEvu5JA&usqp=CAU"
            ]
        },
        {
            id: 4,
            image: Tshirt4,
            brand: "Gucci",
            model: "Gucci",
            price: "$205.65",
            discount: "19%",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0iE_OcFqHuid3WSDuCrvp1uDCwmjeAu2WtYDp4v-RQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR22uWbVJni4a8hTIYqrEcRh7UooVR4pTvQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKfZsey0FV_c0mC2ps47JQ49dmbUcEvu5JA&usqp=CAU"
            ]
        },
        {
            id: 5,
            image: Tshirt5,
            brand: "Gucci",
            model: "Gucci",
            price: "$205.65",
            discount: "19%",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0iE_OcFqHuid3WSDuCrvp1uDCwmjeAu2WtYDp4v-RQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR22uWbVJni4a8hTIYqrEcRh7UooVR4pTvQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKfZsey0FV_c0mC2ps47JQ49dmbUcEvu5JA&usqp=CAU"
            ]
        },
        {
            id: 6,
            image: Tshirt6,
            brand: "Zudio",
            model: "Zudio",
            price: "$205.65",
            discount: "19%",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0iE_OcFqHuid3WSDuCrvp1uDCwmjeAu2WtYDp4v-RQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR22uWbVJni4a8hTIYqrEcRh7UooVR4pTvQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKfZsey0FV_c0mC2ps47JQ49dmbUcEvu5JA&usqp=CAU"
            ]
        },
    ]


    return (
        <View style={{ height: '100%', rowGap: 10, marginTop: 15 }}>

            {/* .......TOP BAR...... */}
            <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', justifyContent: 'center', columnGap: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Tshirts")}>
                    <Image source={Arrow} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <View style={{ width: '88%', height: 50, borderWidth: 1, borderRadius: 20, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                    <Image source={Search} style={{ width: 20, height: 20 }} />
                    <TextInput placeholder='Search' placeholderTextColor="black" style={{ width: '88%' }} />
                </View>
            </View>


            {/* .......CATEGORY...... */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 15 }}>
                <TouchableOpacity style={{ height: 30, width: 80, borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderColor: 'gray' }}>
                    <Text style={{ color: 'black' }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 30, width: 80, borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>Latest</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 30, width: 80, borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 30, width: 80, borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>Cheapest</Text>
                </TouchableOpacity>
            </View>



            {/* .......PRODUCTS...... */}
            <ScrollView style={{ marginBottom: 20, width: '100%' }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', rowGap: 10 }}>
                    {TShirtData.map((item) => (
                        <View key={item.id} style={{ width: '45%', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderRadius: 10, padding: 5, width: '100%' }} onPress={() => ShowProductDetail(item)}>
                                <Image source={item.image} style={{ width: 150, height: 150, borderRadius: 22 }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, width: '100%' }}>
                                    <View>
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.brand}</Text>
                                        <Text style={{ color: 'gray' }}>{item.model}</Text>
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.price}</Text>
                                    </View>
                                    <TouchableOpacity style={{ width: 70, height: 50, backgroundColor: 'green', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => goToAddToCart(item)}>
                                        <Image source={AddCart} style={{ height: 25, width: 25 }} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

        </View>
    );
}

export default Tshirts;
