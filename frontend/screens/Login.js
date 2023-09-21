import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import {View,Image,TextInput,Text, Button,TouchableOpacity,StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//import { auth } from '../firebase'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login=()=>{
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigation = useNavigation();
    const handleNavigateToHome = () => {
        // Navega a la pantalla de inicio (HomeScreen)
        navigation.navigate('HomeScreen');
      };
      const handleNavigateToSignUp = () => {
        // Navega a la pantalla de inicio (HomeScreen)
        navigation.navigate('SignUp');
      };

      const login = () => {
        signInWithEmailAndPassword(auth,email,contraseña).then((userCredential) => {
           console.log("user credential", userCredential);
           const user = userCredential.user;
           console.log("user details", user);
        })
    }
   
     useEffect(() => {
       try {
         const unsubscribe = auth.onAuthStateChanged((authUser) => {
           if (authUser) {
             navigation.replace("HomeScreen");
           }
         });
   
         return unsubscribe;
       } catch (e) {
         console.log(e);
       }
     }, []);
    return(
        <SafeAreaView className="bg-white  content-center " style={{ height: 1300}}
        >

                 <View className="items-center" style={{ marginTop: 200 , marginBottom:100} }>
                 <Image source={require('../assets/Home/Login.png')} />
                 </View>
              
                 <View className="flex-column items-center mt-8">
                        <View className="flex mb-8">
                            <TextInput className="border-b-2 w-96  border-black mb-8 text-lg"
                                placeholder='Email'
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholderTextColor={"black"}
                              
                            />
                                </View>
                        
                        <View className="flex "style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black   text-lg" 
                            value={contraseña}
                            onChangeText={(text) => setContraseña(text)}
                            secureTextEntry={true}
                            placeholder="Contraseña"
                            placeholderTextColor={"black"}
                            />
                        </View>
                        
                        <View >
                            <TouchableOpacity  style={styles.button}
                                  onPress={login}

                               // onPress={handleLogin}
                            >
                                <Text style={styles.buttonText}>Ingresar</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                               // onPress={handleSignUp}
                              //  style={[styles.button, styles.buttonOutline]}
                            >
                            <View className="flex items-center mt-8">
                                <Text className="text-blue-500  text-lg my-8 ">Haz olvidado tu contraseña?</Text>
                               
                                
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                               onPress={handleNavigateToSignUp}
                            >
                            <View className="flex-row">
                                 <Text className="text-lg">¿No tienes una cuenta? </Text>
                                 <Text className="text-blue-500  text-lg">Resgistrate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
        
                 </View>

        </SafeAreaView>
       )
    
 };
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
  
  
 export default Login;
