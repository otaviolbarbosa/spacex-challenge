import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation';

// import { Container } from './styles';

type Props = StackScreenProps<RootStackParamList, 'Mission'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerWrapper}>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}>Mission</Text>
            <Text style={styles.value}>Mission Name Test</Text>
          </View>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}></Text>
            <Text style={styles.valueSmall}>5 days ago</Text>
          </View>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}>Rocket</Text>
            <Text style={styles.value}>Rocket Name Test</Text>
          </View>
          <View style={styles.infoUnitContainer}>
            <Text style={styles.label}>Site</Text>
            <Text style={styles.value}>Site Name Test</Text>
          </View>
          <TouchableOpacity style={styles.articleLinkContainer}>
            <Text style={styles.articleLinkText}>See Article</Text>
          </TouchableOpacity>
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
  imageContainer: {
    // backgroundColor: 'red',
    flexGrow: 0.7,
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
    color: '#666'
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold'
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

export default Home;