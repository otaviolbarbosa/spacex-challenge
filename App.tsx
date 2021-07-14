import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import _ from 'lodash';
import { StackNavigation } from './src/Navigation';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

const CTX_INITIAL_VALUE = {
  imagesCtx: {},
  toggleImage: (id: string, index: number) => {}
};

export const ImagesContext = createContext(CTX_INITIAL_VALUE);

export default function App() {
  const [imagesCtx, setImagesCtx] = useState({});
  
  const toggleImage = (id: string, index: number) => {
    if(Object.keys(imagesCtx).includes(id)) {
      let currCtx = _.get(imagesCtx, [id]);

      if(_.includes(currCtx, index))
        currCtx = currCtx.filter((idx: number) => index !== idx);
      else
        currCtx.push(index);

      setImagesCtx({ ...imagesCtx, [id]: currCtx })
    } else {
      setImagesCtx({ ...imagesCtx, [id]: [index] });
    }
  }

  return (
    <ApolloProvider client={client}>
      <ImagesContext.Provider value={{imagesCtx, toggleImage}}>
        <StackNavigation />
      </ImagesContext.Provider>
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
