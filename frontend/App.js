
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { TailwindProvider } from 'tailwindcss-react-native'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screens 
import homeScreen from './screens/homeScreen';
import homeScreen from './screens/accountData';

import homeScreen from './screens/chooseSent';

import homeScreen from './screens/contact';



const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/*screens*/}
          <Stack.Screen
          name="Home" 
          components={homeScreen}
          options={{
            presentacion:"modal",
            headerShown:false
          }
          } />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
