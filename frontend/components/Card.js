import React, { useState, useEffect  } from 'react';
import { View, Text, ScrollView } from 'react-native';

const Card = () => {
    const [card,setFooter] = useState([])

  return (
    <ScrollView>
        <View className="bg-white rounded-lg shadow-md mt-8 p-6 max-w-xs">
            <Text className="text-xl font-semibold mb-2">Título de la tarjeta</Text>
            <Text className="text-gray-600">Contenido de la tarjeta</Text>
        </View>
        <View className="bg-white rounded-lg shadow-md mt-8 p-6 max-w-xs">
            <Text className="text-xl font-semibold mb-2">Título de la tarjeta</Text>
            <Text className="text-gray-600">Contenido de la tarjeta</Text>
        </View>
        <View className="bg-white rounded-lg shadow-md mt-8 p-6 max-w-xs">
            <Text className="text-xl font-semibold mb-2">Título de la tarjeta</Text>
            <Text className="text-gray-600">Contenido de la tarjeta</Text>
        </View>
        <View className="bg-white rounded-lg shadow-md mt-8 p-6 max-w-xs">
            <Text className="text-xl font-semibold mb-2">Título de la tarjeta</Text>
            <Text className="text-gray-600">Contenido de la tarjeta</Text>
        </View>
        
    </ScrollView>
  );
};

export default Card;
