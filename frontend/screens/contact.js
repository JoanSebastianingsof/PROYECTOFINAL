import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//icons
import{FontAwesomeIcon} from '@fortawesome/react-native-fortawesome';
import{
    faSlider,
    faMagnifyGlass,
    faChevronDown,
    faUser,
}from'@fortawesome/react-native-fortawesome';
const contact=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView>
         <View>
            <Image source={'./assets/Home/descuento.PNG'}/>                 
         </View>

         <Text>
                 Contactenos
         </Text>
         <View className="flex">
         <Text>
                 Nombre
         </Text>
         <TextInput>

         </TextInput>
         <Text>
                 Correo
         </Text>
         <TextInput>

         </TextInput>
         <Text>
                 Telefono
         </Text>
         <TextInput>
 
         </TextInput>
         <Text>
                 Mensaje
         </Text>
         <TextInput>

         </TextInput>
         <Button>Enviar</Button>
         </View>

         <Footer/>
        </SafeAreaView>
       )
    
 }