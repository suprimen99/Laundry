import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Logo, Splashbackground } from '../../../assets'


const Splash = ({navigation}) => {

  useEffect(()=> {
    setTimeout(()=> {
      navigation.replace('MainApp')
    }, 3000)
  }, [navigation]);

  return (
    <ImageBackground source={Splashbackground} style={styles.background}>
      <Image source={Logo} style={styles.Logo}></Image>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background :{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  Logo: {
    width: 250,
    height: 250
  },
  
})