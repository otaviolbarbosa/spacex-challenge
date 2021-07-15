import React from 'react';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

import { Provider as ApolloProvider } from './src/services/ApolloProvider';
import { FavouritesProvider } from './src/store/FavouritesContext';

import { StackNavigation } from './src/Navigation';

export default function App() {
  return (
    <ApolloProvider>
      <FavouritesProvider>
        <StackNavigation />
      </FavouritesProvider>
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
