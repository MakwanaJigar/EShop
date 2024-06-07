// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login/Login';
import Verification from '../Screens/Verification/Verification';
import BottomNav from './ButtomNav';
import Bags from '../Components/Bags';
import Jeans from '../Components/Jeans';
import Shoes from '../Components/Shoes';
import HeadPhones from '../Components/HeadPhones';
import Earbuds from '../Components/Earbuds';
import Tshirts from '../Components/Tshirts';
import ProductDetail from '../Screens/Product/ProductDetail';
import AddToCart from '../Components/AddToCart';

const Stack = createStackNavigator();
const headerOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={headerOptions}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="BottomNav" component={BottomNav} />


      <Stack.Screen name="Bags" component={Bags}/> 
      <Stack.Screen name="Jeans" component={Jeans} />
      <Stack.Screen name="Shoes" component={Shoes} />
      <Stack.Screen name="HeadPhones" component={HeadPhones} />
      <Stack.Screen name="Earbuds" component={Earbuds} />
      <Stack.Screen name="Tshirts" component={Tshirts} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="AddToCart" component={AddToCart} />

    </Stack.Navigator>
  );
};


export default Navigation;



