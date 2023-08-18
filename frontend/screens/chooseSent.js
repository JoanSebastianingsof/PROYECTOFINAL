import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from './src/components/Header';
import Footer from './src/components/Footer';



const ChooseSent=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView>
            <Header/>

            <View className="flex-row">
                   <CheckBox
                       value={isSelected}
                       onValueChange={setSelection}
                   />
                   <Text>
                       Punto fisico
                   </Text>
            </View>
            <View className="flex-row">
                   <CheckBox
                       value={isSelected}
                       onValueChange={setSelection}
                   />
                   <Text>
                       Domicilio
                   </Text>
                   <TextInput>

                   </TextInput>
            </View>   
             <Button
                title="Comprar"
            />
            <Footer/>

        </SafeAreaView>
    )


    }
    export default ChooseSent;
