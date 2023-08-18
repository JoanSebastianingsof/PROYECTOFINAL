import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../firebase'

const SignUp=()=>{
    const [nombre,setnombre] = useState("")
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
    }
    return(
        <SafeAreaView>

                 <View>
                 <Image source={require('../assets/Home/Login.png')} />
                 </View>
              
                 <View className="flex-column">
                        <View className="flex">
                            <TextInput
                                placeholder='Nombre'
                                value={nombre}
                                onChangeText={text => setnombre(text)}
                                style={styles.input}
                            />
                        </View>
                        <View className="flex">
                            <TextInput
                                placeholder='Email'
                                value={email}
                                onChangeText={text => setEmail(text)}
                                style={styles.input}
                            />
                        </View>
                       <View className="flex">
                            <TextInput
                                placeholder='Numero de celular'
                                value={celular}
                                onChangeText={text => setcelular(text)}
                                style={styles.input}
                            />
                        </View>
                 
                        
                        <View className="flex">
                            <TextInput
                            placeholder='Password'
                            value={password}
                            onChangeText={text => setPasword(text)}
                            style={styles.input}
                            secureTextEntry
                            />
                        </View>
                        
                        <View
                            style={styles.buttonContainer}
                        >
                          
                            <TouchableOpacity
                                onPress={handleSignUp}
                                style={[styles.button, styles.buttonOutline]}
                                component={Login}

                            >
                           
                            </TouchableOpacity>
                        </View>
        
                 </View>

        </SafeAreaView>
       )
    
 }
 export default SignUp;
