import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Search from '../../Assets/HomePage/Search.png'
import Cart from '../../Assets/HomePage/Cart.png'

import Logo from "../../Assets/LOGO/social.png"

// import Hero1 from '../../Assets/HomePage/HomeTab/Hero1.webp'
// import Hero2 from '../../Assets/HomePage/HomeTab/Hero2.jpg'
// import Hero3 from '../../Assets/HomePage/HomeTab/Hero3.gif'

import Shoes from '../../Assets/HomePage/HomeTab/Shoes.jpg'
import Tshirt from '../../Assets/HomePage/HomeTab/Tshirt.jpg'
import Jeans from '../../Assets/HomePage/HomeTab/Jeans.jpg'
import EarPhones from '../../Assets/HomePage/HomeTab/EarPhones.jpg'
import HeadPhones from '../../Assets/HomePage/HomeTab/HeadPhones.jpg'
import Purse from '../../Assets/HomePage/HomeTab/Purse.jpg'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Home = () => {
  // const badgeCount = 1;
  const navigation = useNavigation()
  const [cartCount , setCartCount] = useState(0) 

  const cartData = useSelector((state)=> state.reducer)

  useEffect(()=>{
    setCartCount(cartCount.lenght)
    console.log(cartCount);

  },[cartData])

  return (
    <ScrollView style={{ height: "100%", width: "100%" }}>

      {/* .......TOP SECTION....... */}
      <View style={{ width: "100%", height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', columnGap: 50, borderBottomWidth: 0.2 }}>



        {/*user name*/}
        <View style={{ flexDirection: 'row', columnGap: 20 }}>
          <View>
            <Image source={Logo} style={{ width: 50, height: 50 }} />
          </View>
          <View>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
              Hi, Jigar
            </Text>
            <Text style={{ color: 'black' }}>
              Let's go shopping
            </Text>
          </View>
        </View>

        {/* SAEARCH & CART ICON */}

        <View style={{ flexDirection: 'row', columnGap: 10 }}>
          <TouchableOpacity>
            <Image source={Search} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Image source={Cart} style={{ width: 26, height: 26 }} />
          </TouchableOpacity> */}

          <TouchableOpacity onPress={() => navigation.navigate("AddToCart")}>
            <View>
              <Image source={Cart} style={{ width: 26, height: 26 }} />
              {cartCount > 0 && (
                <View style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 12,
                  }}>{cartCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

        </View>


      </View>


      {/* ...........MAIN CONTENT........... */}

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* .................HOME TAB CONTENT................. */}

        {/* ..HERO IMAGES.. */}
        {/* <ScrollView>
          <Image source={Hero2} style={{ height: 200 }} />
        </ScrollView> */}


        {/* .........NEW ARRIVALS.......... */}

        <View style={{ marginTop: "10%" }}>


          {/* NEW ARRIVALS */}
          <View style={{ width: "90%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
              NEW ARRIVALS
            </Text>
            <TouchableOpacity>
              <Text style={{ color: 'skyblue' }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          {/* ....NEW ARRIVALS content..... */}

          <View style={{ flex: 1, flexWrap: 'wrap', rowGap: 15 }}>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Shoes")}>
                <Image source={Shoes} style={{ width: 170, height: 200, borderRadius: 22 }} />
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Adidas SuperStar</Text>
                <Text style={{ color: 'gray' }}>Adidas SuperStar</Text>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>$195.23</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Tshirts")}>
                <Image source={Tshirt} style={{ width: 170, height: 200, borderRadius: 22 }} />
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Zara</Text>
                <Text style={{ color: 'gray' }}>Zara</Text>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>$70.20</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Bags")} >
                <Image source={Purse} style={{ width: 170, height: 200, borderRadius: 22 }} />
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Gucci</Text>
                <Text style={{ color: 'gray' }}>Gucci</Text>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>$205.65</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Earbuds")}>
                <Image source={EarPhones} style={{ width: 170, height: 200, borderRadius: 22 }} />
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Boat</Text>
                <Text style={{ color: 'gray' }}>Bluetooth</Text>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>$105.05</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>

              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Jeans")}>
                <Image source={Jeans} style={{ width: 170, height: 200, borderRadius: 22 }} />
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Peter England</Text>
                <Text style={{ color: 'gray' }}>Denim</Text>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>$90</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("HeadPhones")}>
                <Image source={HeadPhones} style={{ width: 170, height: 200, borderRadius: 22 }} />
                <Text style={{ color: 'black', fontWeight: 'bold' }}>JBL</Text>
                <Text style={{ color: 'gray' }}>HeadPhones</Text>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>$165</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </View>


    </ScrollView>
  );
}

export default Home;
