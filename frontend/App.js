//import { StatusBar } from 'expo-status-bar';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//components
import HomeScreen  from './screens/HomeScreen';
import Contact  from './screens/Contact';
import SignUp  from './screens/SignUp';
import Login  from './screens/Login';
import ProductDescription  from './screens/ProductDescription';
import PurchaseSummary  from './screens/PurchaseSummary';

import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';

//import { StyleSheet, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          
          <Stack.Screen
            name="Login"
            component={Login} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp} 
            options={{
              headerShown: false
            }}
          />
           <Stack.Screen
          name="Contact"
          component={Contact} 
          options={{
            headerShown: false
          }}
        />
 <Stack.Screen
              name="ProductDescription"
              component={ProductDescription} 
              options={{
                headerShown: false
              }}
            />
              <Stack.Screen
              name="PurchaseSummary"
              component={PurchaseSummary} 
              options={{
                headerShown: false
              }}
            />         
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}