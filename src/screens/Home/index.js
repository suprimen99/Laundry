import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Splashbackground, Logo } from '../../../assets';
import React from 'react';
import Saldo from '../../../Component/Saldo'; // Perbaikan: Mengimpor komponen Saldo dari direktori yang tepat

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Splashbackground} style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.font}>
            <Text style={styles.text}>Selamat Datang </Text>
            <Text style={styles.username}>Muhamad Suprianto </Text>
          </View>
          <Image source={Logo} style={styles.logo} />
        </View>
      </ImageBackground>
      <Saldo />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  logo: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.3,
    marginRight: 8,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00425A',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F8A70',
  },
});
