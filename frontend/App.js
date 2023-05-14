
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { TailwindProvider } from 'tailwindcss-react-native'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screens 
import HomeScreen from './screens/HomeScreen';


import React, { components } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/components/Login/login';
import RegistrasiScreen from './src/components/Registrasi/signup';
import BerandaScreen from './src/components/Beranda/beranda';
import PasienScreen from './src/components/Pasien/pasien';
import InputScreen from './src/components/Pasien/inputData';
import ProfilScreen from './src/components/Profil/profil';
import TentangScreen from './src/components/Tentang/tentang';
import SkorScreen from './src/components/Skor/skor' ;
import DetailScreen from './src/components/Pasien/detail';
import DetailDataPasien from './src/components/Pasien/detailDataPasien';
import Header from './src/components/Header';
import Footer from './src/components/Footer';



import { StackNavigator, DrawerNavigator } from 'react-navigation';


const Dr_Beranda = DrawerNavigator({
  Beranda:{
    screen: BerandaScreen,
},
  Data:{
    screen: PasienScreen,
},
  Profil:{
    screen: ProfilScreen,
},
  Tentang:{
    screen: TentangScreen,
},
 Skor :{
   screen: SkorScreen,
 }
},
{
  drawerWidth: 240,
});

const App = StackNavigator({
Login:{
    screen: LoginScreen,
},
Daftar:{
    screen: RegistrasiScreen,
},
Data:{
    screen: PasienScreen,
},
Beranda:{
    screen: Dr_Beranda,
},
DetailDataPasien:{
  screen: DetailDataPasien,  
},
Profil:{
  screen: ProfilScreen,  
},
Tentang:{
  screen: TentangScreen,
},
Input:{
  screen: InputScreen,
},
Detail:{
  screen: DetailScreen,
},
Skor:{
  screen: SkorScreen,
},
},
{
headerMode: 'none',
navigationOptions:{ 
  header:{ 
    visible: false,
    left: null,
  },
  gesturesEnabled: false,
},
});



const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/*screens*/}
          <Stack.Screen
          name="Home" 
          components={HomeScreen}
          options={{
            presentacion:"modal",
            headerShown:false
          }
          } />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
