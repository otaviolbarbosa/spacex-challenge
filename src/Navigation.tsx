import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import LaunchScreen from './screens/Launch';

export type LaunchType = {
  mission_name: string
  launch_date_local: string
  launch_site: {
    site_name_long: string
  }
  links: {
    article_link?: string,
    flickr_images: string[]
  },
  rocket: {
    rocket_name: string
  }
}

export type RootStackParamList = {
  Home: undefined
  Launch: { launch: LaunchType };
};

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