import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Animation101 from '../screens/Animation101';
import Animation102 from '../screens/Animation102';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import InputScreen from '../screens/InputScreen';
import PullToRef from '../screens/PullToRef';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="InputScreen" component={InputScreen} />
      <Stack.Screen name="PullToRef" component={PullToRef} />
    </Stack.Navigator>
  );
}