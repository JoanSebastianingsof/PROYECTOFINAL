import React from 'react';
//import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from"../screens/HomeScreen";
import Contact from"../screens/Contact";




    const Drawer = createDrawerNavigator();

  const Header=()=>{
      return (
        
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Contactenos" component={Contact} />
          </Drawer.Navigator>
      );

  };

  export default Header;

  

    
