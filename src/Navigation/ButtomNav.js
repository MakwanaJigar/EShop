import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Home from '../Screens/Home/Home';

import HomeIMG from '../Assets/ButtomTab/home.png'
import OrderIMG from '../Assets/ButtomTab/tracking.png'
import FavoriteIMG from '../Assets/ButtomTab/heart.png'
import ProfileIMG from '../Assets/ButtomTab/user.png'

const Tab = createBottomTabNavigator();

const MyOrder = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 2</Text>
  </View>
);

const Favorite = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 3</Text>
  </View>
);

const MyProfile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 4</Text>
  </View>
);

const BottomNav = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color, size }) => (
             <Image source={HomeIMG} style={{width:30,height:30}}/>
            ),
            headerShown: false,
          }}/>
        <Tab.Screen name="MyOrder" component={MyOrder} options={{
            tabBarIcon: ({ color, size }) => (
             <Image source={OrderIMG} style={{width:30,height:30}}/>
            ),
            headerShown: false,
          }}/>
        <Tab.Screen name="Favorite" component={Favorite} options={{
            tabBarIcon: ({ color, size }) => (
             <Image source={FavoriteIMG} style={{width:30,height:30}}/>
            ),
            headerShown: false,
          }}/>
        <Tab.Screen name="MyProfile" component={MyProfile} options={{
            tabBarIcon: ({ color, size }) => (
             <Image source={ProfileIMG} style={{width:30,height:30}}/>
            ),
            headerShown: false,
          }}/>
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default BottomNav;
