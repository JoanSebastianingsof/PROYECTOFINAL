import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


const accountData=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView>
            <View className="flex-row">
                  <Text>
                      Numero de tarjerta
                  </Text>
                  <TextInput>

                  </TextInput>

              </View>
              <View className="flex-row">
                  <Text>
                      Vencimiento
                  </Text>
                  <TextInput>

                  </TextInput>

              </View>
              <View className="flex-row">
                  <Text>
                      Nombre del titular
                  </Text>
                  <TextInput>

                  </TextInput>

              </View>
              <View className="flex-row">
                  <Text>
                      CVV
                  </Text>
                  <TextInput>

                  </TextInput>

              </View>
             <Link to="/chooseSent">
                  <Button
                      title="Siguiente"
                  />
             </Link>

        </SafeAreaView>
    )


    }