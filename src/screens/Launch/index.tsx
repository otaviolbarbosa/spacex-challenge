import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/types';
import moment from 'moment';
import { useCallback } from 'react';
import Slider from '../../components/Slider';
import { StatusBar } from 'expo-status-bar';

type Props = StackScreenProps<RootStackParamList, 'Launch'>;

const Launch = ({ route }: Props) => {
  const { params: { launch }} = route;

  const handlePress = useCallback(async () => {
    launch.links.article_link && await Linking.openURL(launch.links.article_link);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.sliderContainer}>
        <Slider id={launch.id} images={launch.links.flickr_images.slice(0, 3)} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerWrapper}>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}>Mission</Text>
            <Text style={styles.value}>{launch.mission_name}</Text>
          </View>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}></Text>
            <Text style={styles.valueSmall}>{moment(launch.launch_date_local).startOf('day').fromNow()}</Text>
          </View>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}>Rocket</Text>
            <Text style={styles.value}>{launch.rocket.rocket_name}</Text>
          </View>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}>Site</Text>
            <Text style={styles.value}>{launch.launch_site.site_name_long}</Text>
          </View>
          { launch.links.article_link && (
            <TouchableOpacity
              style={styles.articleLinkContainer}
              onPress={handlePress}
            >
              <Text style={styles.articleLinkText}>See Article</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: -50
  },
  sliderContainer: {
    flexGrow: 0.7
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  infoContainerWrapper: { flex: 1 },
  infoContainer: {
    flexGrow: 0.3,
    padding: 20
  },
  infoUnitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    color: '#666',
    marginRight: 10
  },
  value: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  valueSmall: {
  },
  articleLinkContainer: {
    backgroundColor: 'purple',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  articleLinkText: {
    color: '#fff',
    fontWeight: "400",
  }
});

export default Launch;