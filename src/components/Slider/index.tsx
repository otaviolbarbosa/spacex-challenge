import React, { useState } from 'react';
import { Image, View, Text, ScrollView, Dimensions, StyleSheet, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Container } from './styles';

const { width, height: originalHeight } = Dimensions.get('window');
const height = originalHeight * 0.7;

type Props = {
  images: string[]
}

const Slider = ({ images }: Props) => {
  const [activePage, setActivePage] = useState<Number>(0);
  const [favourite, setFavourite] = useState<Number>();

  const handleScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    if(slide !== activePage)
      setActivePage(slide);
  }

  const handlePressFavourite = () => {
    setFavourite(activePage);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scroll}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image}}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((image, index) => (
          <Text key={index} style={index === activePage ? styles.activePage : styles.page}>
            <Icon name="circle" solid />
          </Text>
        ))}
      </View>
      <View style={styles.favouriteContainer}>
        <TouchableOpacity
          onPress={handlePressFavourite}
          style={styles.favouriteButton}
        >
          <Text style={styles.favouriteText}>
            <Icon name="heart" solid={favourite === activePage} size={32} color={favourite === activePage ? '#f00' : '#fff'} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 50, width, height },
  scroll: { width, height},
  image: { width, height, resizeMode: 'cover' },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center'},
  page: { color: '#888', margin: 3 },
  activePage: { color: '#fff', margin: 3 },
  favouriteContainer: { color: '#fff', flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'flex-end' },
  favouriteButton: { padding: 10},
  favouriteText: { color: '#fff' }
});
export default Slider;