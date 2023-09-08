import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button,TouchableOpacity,StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../firebase'

const SignUp=()=>{
    const navigation = useNavigation();

    const handleNavigateToLogin = () => {
        // Navega a la pantalla de inicio (HomeScreen)
        navigation.navigate('Login');
      };
    /*const [nombre,setnombre] = useState("")
    const [email,setEmail] = useState("")
    const [celular,setcelular] = useState("")
    const [password,setPasword] = useState("")
    const navigation = useNavigation();


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.navigate("Home")
            }
        })
        return unsubscribe
    },[])
    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(user.email)
            })
            .catch(error => console.err(error))
    }

    // login
    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Logged in with:', user.email)
            })
            .catch(error => console.err(error))
    }*/
    return(
        <SafeAreaView className="bg-white  content-center " style={{ height: 1300}}
        >

       
              
                 <View className="items-center" style={{ marginTop: 100 , marginBottom:100} }>
                 <Image source={require('../assets/Home/Login.png')} />
                 </View>
              
                 <View className="flex-column items-center mt-8">
                        <View className="flex" style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black  text-lg"
                                placeholder='Email'
                              /*  value={email}
                                onChangeText={text => setEmail(text)}
                               style={styles.input}*/
                            />
                                </View>
                        
                        <View className="flex "style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black   text-lg" 
                            placeholder='Correo'
                         /*   value={password}
                            onChangeText={text => setPasword(text)}
                           style={styles.input}*/
                            secureTextEntry
                            />
                        </View>
                        <View className="flex "style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black   text-lg" 
                            placeholder='Numero de celular'
                         /*   value={password}
                            onChangeText={text => setPasword(text)}
                           style={styles.input}*/
                            secureTextEntry
                            />
                        </View>
                        <View className="flex "style={{marginBottom:50} }>
                            <TextInput className="border-b-2 w-96  border-black   text-lg" 
                            placeholder='Password'
                         /*   value={password}
                            onChangeText={text => setPasword(text)}
                           style={styles.input}*/
                            secureTextEntry
                            />
                        </View>
                        
                        <View >
                            <TouchableOpacity  style={styles.button}
                                  onPress={handleNavigateToLogin}

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
