import { useState } from 'react';

import {View,Image,TextInput,Text, ScrollView, Linking} from 'react-native';
//icons
import{FontAwesomeIcon} from '@fortawesome/react-native-fortawesome';

const Footer=()=>{
    const[footer,setHeader]=useState([])
    const Email = async() => {
      await Linking.openURL("mailto:Paldsyc@gmail.com");
    }
    const Cel = async() => {
      await Linking.openURL("tel:+573505078085");
    }
    const Whatsapp = async() => {
      await Linking.openURL("https://wa.me/3505078085");
    }
    const Instagram = async() => {
      await Linking.openURL(""); 
    }
    const facebook = async() => {
      await Linking.openURL(""); 
    }
    const twitter = async() => {
      await Linking.openURL(""); 
    }
    
    return(
        <ScrollView>
          {
                /*Footer*/
            }
    
    
            <View className=" bg-blue-800">
                  
                <View className="flex-column ">
                  <Text className="text-white">
                    Paldsyc
                  </Text>
                  <Text className="text-white">
                    Ingresar
                  </Text>
                  <Text className="text-white">
                    Home    
                  </Text >
                  <Text className="text-white">
                    Contactenos
                  </Text>
                 
                </View>
                <View>
                  
                  <Text className="text-white">
                    Links de ayuda
                  </Text>
                  <Text className="text-white" onPress={Email}> 
                    Paldsyc@gmail.com
                  </Text>
                  <Text className="text-white" onPress={Cel}>
                    3102837671    
                  </Text>
                  <Text className="text-white">
                    cll 51 b #38-47 
                  </Text>
                  <View className="text-white flex">
                  <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#ffffff",}} onPress={facebook}/>
                  <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "#ffffff",}}  onPress={Instagram} />
                  <FontAwesomeIcon icon="fa-brands fa-twitter" style={{color: "#ffffff",}}   onPress={twitter}/>
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{color: "#ffffff",}} onPress={Whatsapp} />
                  </View>
    
    
                </View>
    
            </View>
        </ScrollView>
      
    )
        
};

