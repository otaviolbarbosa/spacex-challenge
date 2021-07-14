import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import { Container } from './styles';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Latest Lauches</Text>
      {[0,1,2,3,4,5,6,7,8,9].map(idx => (
        <View key={idx}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.push('Mission', { id: idx })}
          >
            <Image
              source={{ uri: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg' }}
              style={styles.cardImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.missionTitle}>Mission Name {idx}</Text>
              <Text style={styles.missionDate}>May 14th, 2021</Text>
            </View>
            <View style={styles.linkContainer}>
              <TouchableOpacity
              >
                <Icon style={styles.navigationIcon} name="chevron-right" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  title: { fontSize: 20, fontWeight: 'bold', paddingVertical: 15 },
  card: { 
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 1,
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1
    },
  },
  cardImage: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 15
  },
  infoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  missionTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  missionDate: {
    color: '#999',
    fontSize: 12
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  navigationIcon: {
    fontSize: 20,
    paddingHorizontal: 10
  }
})

export default Home;