import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text,TouchableHighlight, ScrollView,StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from 'react-native-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons'

const HomeScreen =()=>{
   const navigation = useNavigation();

   /*useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
   },[])*/

    
   return(
    <SafeAreaView className="pt-5">
         <ScrollView contentContainerStyle={styles.scrollView}>

        {<Header/>}
       
         
        {
            /*Body*/
        }
        <View className="pb-2 mb-2">
             <Image style={{ width: 600,height:250 }}  source={require('../assets/Home/descuento.png')}  />
        </View>
        <View className="py-5 my-5">
        <View className="flex-row items-center justify-end">
        <Text className="text-black text-2xl mr-4">Productos</Text>
        <View className="relative">
          <TextInput
            className="w-64 h-10 px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Buscar"
          />
          
          <View className="absolute inset-y-1 left-0 pl-3 flex items-center">
                {/*<FontAwesomeIcon icon={faMagnifyingGlassPlus} size={30} />*/}
           </View>
        </View>
      </View>
            <ScrollView
            horizontal
            >
                <View className=" bg-white rounded-lg mt-8 p-6 flex justify-center items-center mx-4" style={{width:550}}>
                    <Image source={require('../assets/Home/P1.png')}  className=" w-96 h-96 mb-2" />   
                    <Text className="text-2xl  font-semibold mb-2 mt-2">Título de la tarjeta</Text>
                    <Text className="text-gray-600 text-xl">Contenido de la tarjeta</Text>
                </View>
                <View className=" bg-white rounded-lg mt-8 p-6 flex justify-center items-center mx-4" style={{width:550}}>
                    <Image source={require('../assets/Home/P1.png')}  className=" w-96 h-96 mb-2" />   
                    <Text className="text-2xl  font-semibold mb-2 mt-2">Título de la tarjeta</Text>
                    <Text className="text-gray-600 text-xl">Contenido de la tarjeta</Text>
                </View>
                <View className=" bg-white rounded-lg mt-8 p-6 flex justify-center items-center mx-4" style={{width:550}}>
                    <Image source={require('../assets/Home/P1.png')}  className=" w-96 h-96 mb-2" />   
                    <Text className="text-2xl  font-semibold mb-2 mt-2">Título de la tarjeta</Text>
                    <Text className="text-gray-600 text-xl">Contenido de la tarjeta</Text>
                </View>
               
            </ScrollView>
     
        </View>

       { <View>
            <Footer/>
    </View>}
    </ScrollView>
    </SafeAreaView>
   );


};
const styles = StyleSheet.create({
    scrollView: {
      flexGrow: 1,
    },
    container: {
      alignItems: 'center',
      // Otros estilos para el contenedor principal
    },
    // Otros estilos
  });
export default HomeScreen;
