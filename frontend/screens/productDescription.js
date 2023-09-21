import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//icons
import Header from '../components/Header';
import Footer from '../components/Footer';
//redux

const ProductDescription=()=>{
    const navigation = useNavigation();
    const handleNavigateToPurchaseSummary = () => {
        // Navega a la pantalla de inicio (HomeScreen)
        navigation.navigate('PurchaseSummary');
      };

    return(
        <SafeAreaView className="bg-white">
        <ScrollView> 

        <Header/>
         <Text className="text-2xl mt-8 ml-6">
            Purificador de Agua
         </Text>
         <View className="p-5 flex-row ">
            <View className="flex-column"> 
            <Image  style={{ width: 100,height:100 }} source={require('../assets/Home/P1.png')}  />
            <Image  className="mt-2" style={{ width: 100,height:100 }} source={require('../assets/Home/P1.png')}  />
            <Image  className="mt-2" style={{ width: 100,height:100 }} source={require('../assets/Home/P1.png')}  />
            <Image  className="mt-2" style={{ width: 100,height:100 }} source={require('../assets/Home/P1.png')}  />
            </View>
            <View className="ml-8">
                <Image  style={{ width: 420,height:420 }} source={require('../assets/Home/P1.png')}  />
            </View>
                    
         </View>
         <Text className="text-xl ml-6">
                124.900
         </Text>
        <TextInput className="text-xl  ml-6 mb-8"
             placeholder='Ingrese la cantidad'
          /*   value={password}
             onChangeText={text => setPasword(text)}
            style={styles.input}*/
            secureTextEntry
            />
        
            <View className="items-center">
                <TouchableOpacity  style={styles.button}
                    onPress={handleNavigateToPurchaseSummary}
                    // onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Comprar</Text>
                   </TouchableOpacity>
            </View>
            <View className=" my-8  ml-6">
                <Text className="text-2xl"> 
                    Descripcion
                </Text>
                <Text className="text-lg  my-4"> 
                    EQUIPO PURIFICADOR PARA AGUA CON FILTRACIÓN RIGUROSA Y TRATAMIENTO CON OZONO.

                    El agua es purificada, microfiltrada y luego tratada con Ozono, el mejor desinfectante en potencia y rapidez.

                </Text>
            </View>
            <Footer/>
            </ScrollView>
        </SafeAreaView>
       )
    
 }
 const styles = StyleSheet.create({
    button: {
      width: 550,
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
 export default ProductDescription;

   