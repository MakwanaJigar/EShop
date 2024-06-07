import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

import Earbuds1 from '../Assets/Earbuds/Earbuds1.png'
import Earbuds2 from '../Assets/Earbuds/Earbuds2.webp'
import Earbuds3 from '../Assets/Earbuds/Earbuds3.webp'
import Earbuds4 from '../Assets/Earbuds/Earbuds4.png'
import Earbuds5 from '../Assets/Earbuds/Earbuds5.png'
import Earbuds6 from '../Assets/Earbuds/Earbuds6.webp'

import AddCart from '../Assets/Bags/shopping.png'

import Search from '../Assets/Bags/Search.png'
import Arrow from '../Assets/Bags/arrow.png'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { addToCart } from './Redux/Action'
import store from './Redux/Store';


const Earbuds = () => {
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
    
    const EarbudsData = [
        {
            id : 1,
            image: Earbuds1,
            brand: "Gucci",
            model: "Gucci",
            price: "$205.65",
            discount:"19%",
            discription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
             url : [
                Earbuds1,Earbuds2,Earbuds3
            ]
        },
        {
            id : 2,
            image: Earbuds2,
            brand: "Gucci",
            model: "Gucci",
            price: "$205.65",
            discount:"19%",
            discription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
             url : [
                Earbuds1,Earbuds2,Earbuds3
            ]
        },
        {
            id : 3,
            image : Earbuds3,
            brand : "Gucci",
            model : "Gucci",
            price : "$205.65",
            discount:"19%",
            discription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
             url : [
                Earbuds1,Earbuds2,Earbuds3
            ]
        },
        {
            id : 4,
            image : Earbuds4,
            brand : "Gucci",
            model : "Gucci",
            price : "$205.65",
            discount:"19%",
            discription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
             url : [
                Earbuds1,Earbuds2,Earbuds3
            ]
        },
        {
            id : 5,
            image : Earbuds5,
            brand : "Gucci",
            model : "Gucci",
            price : "$205.65",
            discount:"19%",
            discription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
             url : [
                Earbuds1,Earbuds2,Earbuds3
            ]
        },
        {
            id : 6,
            image : Earbuds6,
            brand : "Gucci",
            model : "Gucci",
            price : "$205.65",
            discount:"19%",
            discription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
             url : [
                Earbuds1,Earbuds2,Earbuds3
            ]
        },
    ]

    return (
        <View style={{ height: '100%', rowGap: 10, marginTop: 15 }}>

            {/* .......TOP BAR...... */}
            <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', justifyContent: 'center', columnGap: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Earbuds")}>
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
                    {EarbudsData.map((item) => (
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

export default Earbuds;
