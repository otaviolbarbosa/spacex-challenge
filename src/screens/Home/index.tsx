import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { LaunchType, RootStackParamList } from '../../Navigation/types';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { gql, useQuery } from '@apollo/client'
import AppLoading from 'expo-app-loading';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';

import logo from '../../../assets/spacex-square-logo.png';

const LAUNCHES_QUERY = gql`
  query Launches {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  const { data, loading } = useQuery(LAUNCHES_QUERY)

  if (loading) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text style={styles.title}>Latest Launches</Text>
      <FlatList
        data={data.launchesPast}
        renderItem={({ item }: { item: LaunchType }) => (
          <View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.push('Launch', { launch: item })}
            >
              <Image
                source={ item.links.flickr_images.length > 0 ? { uri: item.links.flickr_images[0] } : logo  }
                style={styles.cardImage}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.missionTitle}>{item.mission_name}</Text>
                <Text style={styles.missionDate}>{moment(item.launch_date_local).startOf('day').fromNow()}</Text>
              </View>
              <View style={styles.linkContainer}>
                <Icon style={styles.navigationIcon} name="chevron-right" />
              </View>
            </TouchableOpacity>
          </View>
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { display: 'flex'},
  title: { fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 15 },
  list: { paddingHorizontal: 20 },
  card: { 
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
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
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
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