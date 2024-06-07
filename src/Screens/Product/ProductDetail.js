import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

import BackArrow from '../../Assets/ProductDetail/left.png'
import Cart from '../../Assets/HomePage/Cart.png'
import { useNavigation } from '@react-navigation/native';
import Shoes1 from '../../Assets/Shoes/Shoes1.png'

const ProductDetail = ({ route }) => {
    const { product } = route.params;
    const navigation = useNavigation()

    // const data = [
    //     { id: '1', text: 'Item 1' },
    //     { id: '2', text: 'Item 2' },
    //     { id: '3', text: 'Item 3' },
    //     { id: '1', text: 'Item 1' },
    //     { id: '2', text: 'Item 2' },
    //     { id: '3', text: 'Item 3' },
    //     { id: '1', text: 'Item 1' },
    //     { id: '2', text: 'Item 2' },
    //     { id: '3', text: 'Item 3' },
    //     { id: '1', text: 'Item 1' },
    //     { id: '2', text: 'Item 2' },
    //     { id: '3', text: 'Item 3' },

    // ];


    // const renderItem = ({ item }) => (
    //     <View style={{
    //         backgroundColor: '#f9c2ff',
    //         padding: 20,
    //         marginVertical: 8,
    //         marginHorizontal: 16,
    //     }}>
    //         <Text>{item.text}</Text>
    //     </View>
    // );


    return (
        <View style={{ height: '100%', backgroundColor: '#FFF' }}>


            <View style={{}}>
                {/* ...TOPBAR... */}
                <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', height: 50, columnGap: 60, borderBottomColor: 'black', borderBottomWidth: 0.3 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={BackArrow} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ color: "black", fontWeight: 'bold' }}>Detail Product</Text>
                    <TouchableOpacity>
                        <Image source={Cart} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>




            </View>
            {/* .......PRODUCT IMAGE...... */}
            <View style={{ alignItems: 'center', justifyContent: 'center' ,marginTop:20}}>
                {/* <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                /> */}
                {/* <Image source={product.Image} style={{width:100,height:180}}/> */}

                <Image source={product.image} style={{ width: 250, height: 250 }} />

            </View>

            {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={Shoes1} style={{ width: "50%", height: "50%" }} />
            </View> */}
            {/* ......MORE DETAIL LIKE PRICE AND ALL....... */}

            <ScrollView>

                {/* FOR SIZE SECTION */}
                <Text style={{ color: "black", marginLeft: "2%", fontSize: 16, fontWeight: 'bold' }}>Size</Text>
                <ScrollView horizontal={true} >

                    <View style={{ alignItems: 'center', justifyContent: 'center', columnGap: 10, flexDirection: 'row', padding: 10 }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 50, borderWidth: 1 }}>
                            <Text style={{ color: "black" }}>6 UK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 50, borderWidth: 1 }}>
                            <Text style={{ color: "black" }}>7 UK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 50, borderWidth: 1 }}>
                            <Text style={{ color: "black" }}>8 UK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 50, borderWidth: 1 }}>
                            <Text style={{ color: "black" }}>9 UK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 50, borderWidth: 1 }}>
                            <Text style={{ color: "black" }}>10 UK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 50, borderWidth: 1 }}>
                            <Text style={{ color: "black" }}>11 UK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 50, borderWidth: 1 }}>
                            <Text style={{ color: "black" }}>12 UK</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={{ alignItems: 'flex-start', justifyContent: 'center', margin: 20 }}>
                    <Text style={{ color: 'black', fontSize: 24, }}>{product.brand}</Text>
                    <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>{product.price}</Text>
                    <Text style={{ color: 'red', fontSize: 24, }}>{product.discount}</Text>
                </View>

                <Text style={{ color: "gray", fontSize: 16, textAlign: 'left', margin: 10 }}>
                    {product.discription}
                </Text>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, rowGap: 20, marginBottom: 50 }}>
                    <TouchableOpacity style={{ backgroundColor: "#FDDA0D", width: '100%', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 30 }} onPress={() => navigation.navigate("AddToCart")}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '500' }}> Add to Cart </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#FDDA0D", width: '100%', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 30 }}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '500' }}> Buy Now </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    );
}

export default ProductDetail;
