import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import HostScreen from '../screens/hostScreen';
import AudienceScreen from '../screens/audienceScreen';

const Stack = createNativeStackNavigator();

const Laytout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Host" component={HostScreen} />
        <Stack.Screen name="Audience" component={AudienceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Laytout;
