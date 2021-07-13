import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation';

// import { Container } from './styles';

type Props = StackScreenProps<RootStackParamList, 'Mission'>;

const Home = ({ navigation }: Props) => {
  return <View>
    <Text>Mission...</Text>
  </View>;
}

export default Home;