import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//icons
import Header from '../components/Header';
import Footer from '../components/Footer';
const PurchaseSummary=()=>{
    const navigation = useNavigation();
  

    return(
        <SafeAreaView className="bg-white">
        <ScrollView> 

        <Header/>
         <Text className="text-2xl mt-8 ml-6">
            Resumen de compra
         </Text>
         <View className="p-5 flex-row   " style={styles.container}>
            <View className=" align-items-center"> 
                <Image  className="my-4" style={{ width: 100,height:100 }} source={require('../assets/Home/P1.png')}  />
            </View>
            <View className="ml-8 text-lg flex-row mt-4">
               <Text className="text-lg w-32  my-4"> 
                    Purificador de agua


                </Text>
                <Text className="text-lg mx-2 my-8"> 
                    124.900
                </Text>
                <Text className="text-lg  mx-2 my-8"> 
                    cantidad
                </Text>
                <Text className="text-lg mx-2 my-8"> 
                    1
                </Text>
            </View>
                    
         </View>
      
        
            <View className="items-center mt-8">
                <TouchableOpacity  style={styles.button}
//onPress={handleNavigateToPurchaseSummary}
                    // onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Comprar</Text>
                   </TouchableOpacity>
            </View>
           
                
            </ScrollView>
        </SafeAreaView>
       )
    
 }
 const styles = StyleSheet.create({
    container:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.75,
        shadowRadius: 10,
        elevation: 10,
    },
    button: {
      width: 550,
      height: 80,
      backgroundColor: '#2B559C', 
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      color: 'white', 
    },
  }); 
 export default PurchaseSummary;

   