import React, { useState } from 'react';
import { Image, View, Text, ScrollView, Dimensions, StyleSheet, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import _ from 'lodash';

import { ImagesContext } from '../../../App';

import logo from '../../../assets/spacex-big-logo.png';

const { width } = Dimensions.get('window');
const height = '100%';

type Props = {
  id: string
  images: string[]
}

const Slider = ({ id, images }: Props) => {
  const [activePage, setActivePage] = useState<number>(0);

  const handleScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    if(slide !== activePage)
      setActivePage(slide);
  }

  return (
    <ImagesContext.Consumer>
      {
        ({ imagesCtx, toggleImage }) => {
          const handlePressFavourite = () => {
            toggleImage(id, activePage)
          }

          const isFavorite = () => _.includes(_.get(imagesCtx, id), activePage);
        
          return (
            <View style={styles.container}>
              <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                style={styles.scroll}
                scrollEnabled={images.length > 0}
              >
                { images.length > 0 ? (
                  images.map((image, index) => (
                    <Image
                      key={index}
                      source={{ uri: image}}
                      style={styles.image}
                    />
                  ))
                ) : (
                  <Image source={logo} style={styles.image} />
                )
              }
              </ScrollView>
              <View style={styles.pagination}>
                {images.map((image, index) => (
                  <Text key={index} style={index === activePage ? styles.activePage : styles.page}>
                    <Icon name="circle" solid />
                  </Text>
                ))}
              </View>
              {images.length > 0 && <View style={styles.favouriteContainer}>
                <TouchableOpacity
                  onPress={handlePressFavourite}
                  style={styles.favouriteButton}
                >
                  <Text style={styles.favouriteText}>
                    <Icon name="heart" solid={isFavorite()} size={32} color={isFavorite() ? '#f00' : '#fff'} />
                  </Text>
                </TouchableOpacity>
              </View>}
            </View>
          )
        }
      }
    </ImagesContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  },
  scroll: {
    width,
    height
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center'
  },
  page: {
    color: '#888',
    margin: 3
  },
  activePage: {
    color: '#fff',
    margin: 3
  },
  favouriteContainer: {
    color: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end'
  },
  favouriteButton: {
    margin: 15
  },
  favouriteText: {
    color: '#fff'
  }
});

export default Slider;