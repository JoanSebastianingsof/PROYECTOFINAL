import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect,useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button,TouchableOpacity,StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc,doc } from 'firebase/firestore';
const SignUp=()=>{
    const navigation = useNavigation();

    /*const handleNavigateToLogin = () => {
        // Navega a la pantalla de inicio (HomeScreen)
        navigation.navigate('Login');
      };*/
    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [contacto,setContacto] = useState("")
    const [password,setPassword] = useState("");


      const register = () => {
        if(email === "" || password === "" || contacto === "" || nombre==="" ){
            Alert.alert(
                "Invalid Detials",
                "Please enter all the credentials",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
           
            const user = userCredentials._tokenResponse.email;
            const uid = auth.currentUser.uid;

             setDoc(doc(db,"Usuario",`${uid}`),{
                 email:user,
                 contacto:contacto
             })
        })
    }
    return(
        <SafeAreaView className="bg-white  content-center " style={{ height: 1300}}
        >

       
              
                 <View className="items-center" style={{ marginTop: 100 , marginBottom:100} }>
                 <Image source={require('../assets/Home/Login.png')} />
                 </View>
              
                 <View className="flex-column items-center mt-8">
                        <View className="flex" style={{marginBottom:50} }>
                             <TextInput className="border-b-2 w-96  border-black  text-lg"
                                 placeholder='Nombre'
                                 value={nombre}
                                 onChangeText={(text) => setNombre(text)}
                                 placeholderTextColor={"black"}
                             />
                        </View>
                        <View className="flex" style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black  text-lg"
                                placeholder='Email'
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholderTextColor={"black"}
                            />
                        </View>
                        
                        
                        <View className="flex "style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black   text-lg" 
                            placeholder='Numero de celular'
                            value={contacto}
                            onChangeText={(text) => setContacto(text)}
                            placeholderTextColor={"black"}
                            />
                        </View>
                        <View className="flex "style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black   text-lg" 
                            placeholder='Password'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor={"black"}
                            secureTextEntry
                            />
                        </View>
                        
                        <View >
                            <TouchableOpacity  style={styles.button}
                                  onPress={register}

                            >
                                <Text style={styles.buttonText}>Ingresar</Text>

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
  }); export default SignUp;
