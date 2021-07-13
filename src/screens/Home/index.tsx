import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation';

// import { Container } from './styles';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return <View>
    <Text>Home...</Text>
    <Button title="Mission" onPress={() => navigation.push('Mission', { id: 1 })} />
  </View>;
}

export default Home;