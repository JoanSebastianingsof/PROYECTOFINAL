import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//icons
/*import{FontAwesomeIcon} from '@fortawesome/react-native-fortawesome';
import{
    faSlider,
    faMagnifyGlass,
    faChevronDown,
    faUser,
}from'@fortawesome/react-native-fortawesome'*/
const homeScreen=()=>{
   const navigation = useNavigation();

   useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
   },[])

    
   return(
    <SafeAreaView>
       
        <Header/>
       
         
        {
            /*Body*/
        }
        <View>
            <Image source={'./assets/Home/descuento.PNG'}/>            
        </View>
        <View className="flex-row flex-1 space-x-2 bg-gray-50">
            <Text>
                Productos
            </Text>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <TextInput>

            </TextInput>
            <View className="flex-col shadow-lg">
                <Image source={'./assets/Home/P1.PNG'}/>
                <Text className="text-base"> 
                Agua Filtro Purificador Ozono Carbón Completo+ Envío Gratis
                </Text>
                <Text className="text-sm"> 
                Descripcion
                </Text>
                <Text className="text-base" > 
                $159.900
                </Text>
            </View>
            <View className="flex-col shadow-lg">
                <Image source={'./assets/Home/P1.PNG'}/>
                <Text className="text-base"> 
                Agua Filtro Purificador Ozono Carbón Completo+ Envío Gratis
                </Text>
                <Text className="text-sm"> 
                Descripcion
                </Text>
                <Text className="text-base" > 
                $159.900
                </Text>
            </View>
            <View className="flex-col shadow-lg">
                <Image source={'./assets/Home/P1.PNG'}/>
                <Text className="text-base"> 
                Agua Filtro Purificador Ozono Carbón Completo+ Envío Gratis
                </Text>
                <Text className="text-sm"> 
                Descripcion
                </Text>
                <Text className="text-base" > 
                $159.900
                </Text>
            </View>
        </View>


      <footer/>
    </SafeAreaView>
   )


}