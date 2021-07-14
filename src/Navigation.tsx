import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import MissionScreen from './screens/Mission';

export type RootStackParamList = {
  Home: undefined
  Mission: { id: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Mission"
          component={MissionScreen}
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