import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//icons
import{FontAwesomeIcon} from '@fortawesome/react-native-fortawesome';
import{
    faSlider,
    faMagnifyGlass,
    faChevronDown,
    faUser,
}from'@fortawesome/react-native-fortawesome';
//import { View } from "react-native-animatable";
const productDescription=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView>
        <Header/>
         <Text>
            Purificador de Agua
         </Text>
         <View className="p-5">
            <View className="flex-column"> 
                <Image source={'./assets/Home/P1.PNG'} className="shadow-lg"/>
                <Image source={'./assets/Home/P1.PNG'} className="shadow-lg"/>
                <Image source={'./assets/Home/P1.PNG'} className="shadow-lg"/>
                <Image source={'./assets/Home/P1.PNG'} className="shadow-lg"/>
            </View>
            <View>
                <Image source={'./assets/Home/P1.PNG'}/>
            </View>
                    
         </View>
         <Text>
                124.900
            </Text>
            <TextInput>
            Cantidad:1
            </TextInput>
            <View>
                <Button
                    title="Comprar"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <Button
                    title="Agregar al carrito"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <View>
                <Text> 
                    Descripcion
                </Text>
                <Text> 
                    EQUIPO PURIFICADOR PARA AGUA CON FILTRACIÓN RIGUROSA Y TRATAMIENTO CON OZONO.

                    El agua es purificada, microfiltrada y luego tratada con Ozono, el mejor desinfectante en potencia y rapidez.

                </Text>
            </View>
            <footer/>
        </SafeAreaView>
       )
    
 }
   
   