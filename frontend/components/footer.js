import { useState } from 'react';

import {View,Text, ScrollView, Linking} from 'react-native';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faFacebook,
    faInstagram,
    faTwitter,
    faWhatsapp,
} from '@fortawesome/free-solid-svg-icons'


const Footer=()=>{
    const[Footer,setFooter]=useState([])
    const Email = async() => {
      await Linking.openURL("mailto:Paldsyc@gmail.com");
    }
    const Cel = async() => {
      await Linking.openURL("tel:+573505078085");
    }
    const Whatsapp = async() => {
      await Linking.openURL("https://wa.me/3505078085");
    }
  /*  const Instagram = async() => {
      await Linking.openURL(""); 
    }
    const Facebook = async() => {
      await Linking.openURL(""); 
    }
    const Twitter = async() => {
      await Linking.openURL(""); 
    }*/
    
    return(
         
    
    
            <View className="flex-row pb-8 justify-between" style={{backgroundColor:"#2B559C"}}>
                
                <View className="w-52 py-5 ml-5" >
                  <Text className="text-white text-2xl">
                    Paldsyc
                  </Text>
                  <Text className="text-white text-lg">
                    Ingresar
                  </Text>
                  <Text className="text-white text-lg">
                    Home    
                  </Text >
                  <Text className="text-white text-lg">
                    Contactenos
                  </Text>
                 
                </View>
                <View className=" py-5 mr-5">
                  
                  <Text className="text-white text-2xl">
                    Links de ayuda
                  </Text>
                  <Text className="text-white text-lg" onPress={Email}> 
                    Paldsyc@gmail.com
                  </Text>
                  <Text className="text-white text-lg" onPress={Cel}>
                    3102837671     
                  </Text>
                  <Text className="text-white text-lg">
                    cll 51 b #38-47 
                  </Text>
                  <View className="text-white flex">
                    <FontAwesomeIcon icon={ faFacebook } size={20} style={{color: "#ffffff",}}   />
                    <FontAwesomeIcon icon={ faInstagram } size={20} style={{color: "#ffffff",}}  />
                    <FontAwesomeIcon icon={ faTwitter } size={20} style={{color: "#ffffff",}}  />     
                    <FontAwesomeIcon icon={ faWhatsapp } size={20} style={{color: "#ffffff",}} onPress={Whatsapp}/>
                  </View>
    
    
                </View>
    
            </View>
      
    );
        
};
export default Footer;


