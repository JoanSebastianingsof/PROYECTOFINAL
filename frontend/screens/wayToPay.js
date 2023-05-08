import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {View,Image,TextInput,Text, Button, ScrollView,CheckBox} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const wayToPay=()=>{
    const navigation = useNavigation();

    useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
    },[])
    return(
        <SafeAreaView>
            <Text>
                Elegir forma de pago
            </Text>
            <ScrollView className="flex-column">
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text>
                        Mastercard
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text>
                        Visa
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text>
                        Efectivo
                    </Text>
                    
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text>
                        Dinners
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text>
                        PSE
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text>
                        American
                    </Text>
                </View>
                <View className="flex-row">
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
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

        </SafeAreaView>
    )


    }