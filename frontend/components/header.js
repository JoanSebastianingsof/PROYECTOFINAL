import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



    const Drawer = createDrawerNavigator();

    export default function App() {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Ingresar" component={iniciarsesion} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Contactenos" component={contact} />
          </Drawer.Navigator>
        </NavigationContainer>
      );

      }


  

    
