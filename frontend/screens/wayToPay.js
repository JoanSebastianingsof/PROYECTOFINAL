import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button, ScrollView,CheckBox} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const WayToPay=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView>
            <Header/>

            <Text>
                Elegir forma de pago
            </Text>
            <ScrollView className="flex-column">
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text>
                        Mastercard
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text>
                        Visa
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text>
                        Efectivo
                    </Text>
                    
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text>
                        Dinners
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text>
                        PSE
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text>
                        American
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                    <Text>
                       Codensa
                    </Text>
                </View>
                <Link to="/accountData">
                    <Button
                        title="Siguiente"
                    />
                </Link>
                
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    )


    }
    export default WayToPay;
