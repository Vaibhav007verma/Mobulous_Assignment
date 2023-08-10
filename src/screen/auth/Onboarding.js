import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const Onboarding = () => {
  const navigation = useNavigation()
  const images = [
    require('../../assets/images/login1.png'),
    require('../../assets/images/signup.jpg'),
    require('../../assets/images/login1.png'),

  ];

  const next = () => {
    navigation.navigate('Login')

  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {index === 2 ?
          <>
            <Image source={item} style={styles.image} />
            <View style={styles.primaryView}>
              <Button text='Login' next={next} />
            </View>
          </>
          :
          <>
            <Image source={item} style={styles.image} />
            <View style={styles.secondaryView}>
              <Text style={{
                marginVertical: 20,
                fontSize: 16,
                fontWeight: '600',
                color: '#0164ff',
                textAlign: 'center',
              }}>Next</Text>
              <Image source={require('../../assets/icons/next.png')} style={styles.image} />

            </View>
          </>

        }
      </View>
    );
  };

  return (
    <>
      <Header />
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
      />
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '40%',
    resizeMode: 'stretch',
  },
  primaryView: { width: '85%', marginVertical: 30 },
  secondaryView: { width: '85%', marginVertical: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
  image: { width: 30, tintColor: '#0164ff', resizeMode: 'contain', height: 20, marginLeft: 20 }
});

export default Onboarding;
