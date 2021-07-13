import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MyStack } from './src/Navigation';

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MyStack />
    </ApolloProvider>
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