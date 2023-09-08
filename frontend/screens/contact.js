import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button,StyleSheet,TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../components/Header';
import Footer from '../components/Footer';
const Contact=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView className="bg-white h-screen">
                 <Header/>

                 <View className="pb-8 mb-8">
                        <Image style={{ width: 600,height:250 }}  source={require('../assets/Home/descuento.png')}  />
                 </View>
                <View className ="flex-column items-center  justify-center ">
                        
                        <Text className=" w-40 text-2xl" >
                                Contactenos
                        </Text>
                       
                </View>
                 
                 <View className="flex-column mt-5 pt-5" style={{marginBottom:180}}>
                        <View className="justify-center flex-row mb-5" >
                                <Text className="mr-4 text-lg ">
                                         Nombre:
                                 </Text>
                                 <TextInput className="border-b-2 border-black w-96 ml-5">

                                 </TextInput>
                        </View>
                        
                        <View className="justify-center flex-row mb-5">
                                <Text className="mr-5 pr-2 text-lg ">
                                        Correo:
                                 </Text>
                                 <TextInput  className="border-b-2 border-black w-96 ml-5">

                                 </TextInput>
                        </View>
                        <View className="justify-center flex-row mb-5">
                                <Text className="mr-4 text-lg ">
                                        Telefono:
                                 </Text>
                                 <TextInput  className="border-b-2 border-black w-96 ml-5">

                                 </TextInput>
                        </View>
                        <View className="justify-center flex-row mb-5">
                                <Text className="mr-4 text-lg ">
                                        Mensaje:
                                 </Text>
                                 <TextInput className="border-b-2 border-black w-96 ml-5">

                                 </TextInput>
                        </View>
                       <View className="items-center mt-8">
                       <TouchableOpacity   style={styles.button}

                        // onPress={handleLogin}
                        >
                        <Text style={styles.buttonText}>Ingresar</Text>

                        </TouchableOpacity>

                       </View>
                      
        
                 </View>

                 <Footer/>
        </SafeAreaView>
       )
    
 }
 const styles = StyleSheet.create({
        button: {
          width: 350,
          height: 80,
          backgroundColor: '#2B559C', // Color de fondo del botón
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonText: {
          fontSize: 18,
          color: 'white', // Color del texto del botón
        },
      });
 export default Contact;
