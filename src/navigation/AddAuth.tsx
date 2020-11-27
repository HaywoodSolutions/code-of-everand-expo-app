import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/AddAuth/LoginScreen';
import RegisterScreen from '../screens/AddAuth/RegisterScreen';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export type MainParamList = {
  Login: {};
  Register: {};
};

function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}>
          <StatusBar style="light" />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default App;