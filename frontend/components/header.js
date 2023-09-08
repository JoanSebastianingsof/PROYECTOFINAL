import React,{ useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons'; 




  const Header=()=>{
    const navigation = useNavigation();

    const handleLoginPress = () => {
      navigation.navigate('Login'); 
    };
  
    const handleHomeScreenPress = () => {
      navigation.navigate('HomeScreen');
    };
  
    const handleContactPress = () => {
      navigation.navigate('Contact'); 
    };
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
      setIsMenuVisible(!isMenuVisible);
    };

      return (
        
        <View className="shadow-lg shadow-black "style={{  padding: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 40 }}>PSC</Text>
            <TouchableOpacity onPress={toggleMenu}>
              <FontAwesome name="bars" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {isMenuVisible && (
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={handleLoginPress}>
                <Text style={{ color: 'black' }}>Ingresar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHomeScreenPress}>
                <Text style={{ color: 'black' }}>Inicio</Text>
              </TouchableOpacity> 
                  <TouchableOpacity onPress={handleContactPress}>
                <Text style={{ color: 'black', width:350 }}>Contactenos</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>

      
      );

  };

  export default Header;

  

    
