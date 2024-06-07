import React from 'react';
import { View, Text } from 'react-native';
// import Login from './src/Screens/Login';
import Navigation from './src/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
     <Navigation />
     
    </NavigationContainer>
  );
}

export default App;
