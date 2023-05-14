import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from './src/components/Header';
import Footer from './src/components/Footer';
const contact=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView>
                 <Header/>

                 <View>
                    <Image source={'./assets/Home/descuento.PNG'}/>                 
                 </View>

                 <Text>
                         Contactenos
                 </Text>
                 <View className="flex-column">
                        <View className="flex">
                                <Text>
                                         Nombre
                                 </Text>
                                 <TextInput>

                                 </TextInput>
                        </View>
                        
                        <View className="flex">
                                <Text>
                                        Correo
                                 </Text>
                                 <TextInput>

                                 </TextInput>
                        </View>
                        <View className="flex">
                                <Text>
                                        Telefono
                                 </Text>
                                 <TextInput>

                                 </TextInput>
                        </View>
                        <View className="flex">
                                <Text>
                                        Mensaje
                                 </Text>
                                 <TextInput>

                                 </TextInput>
                        </View>
                       
                                
                         <Button
                                title="Enviar"
                         />
        
                 </View>

                 <Footer/>
        </SafeAreaView>
       )
    
 }