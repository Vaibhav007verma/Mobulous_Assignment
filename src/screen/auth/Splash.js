import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation()
  const [number, setNumber] = useState('9301152241')
  const session = () => {
    if (number) {
      navigation.navigate('Onboarding')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        onAnimationEnd={() => {
          session()
        }}
        duration={3000}
        source={require('../../assets/images/logo.png')}
        style={styles.bgImage}
        resizeMode="center"
      />
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgImage: { flex: 1, width: 200, height: 200 }
})