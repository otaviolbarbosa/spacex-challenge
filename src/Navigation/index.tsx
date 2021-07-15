import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LaunchScreen from '../screens/Launch';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Launch"
          component={LaunchScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            safeAreaInsets: {
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};