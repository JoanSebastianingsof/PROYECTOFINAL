import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



    const Drawer = createDrawerNavigator();

  const Header=()=>{
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Contactenos" component={contact} />
          </Drawer.Navigator>
        </NavigationContainer>
      );

  };

  export default Header;

  

    
