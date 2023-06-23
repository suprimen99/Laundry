import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Splashbackground, Logo, Setrika, Vip, Ekspres, Satuan, Kiloan, Karpet } from '../../../assets';
import React from 'react';
import Saldo from '../../../Component/Saldo';
import Pesananaktif from '../../../Component/PesananAktif';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
      {/* layanan */}
      <View style={styles.Layanan}>
       
          <Text style={styles.labels}>Layanan Kami</Text>
          <View style={styles.iconslayanan}>
            <View style={{ backgroundColor: '#ECF8F9', borderRadius: 10, alignItems: 'center', paddingTop: 20 }}>
              <TouchableOpacity>
                <Image style={styles.labelicon} source={Setrika} />
              </TouchableOpacity>
              <Text style={{ fontSize: 12 }}>setrika</Text>
            </View>
            <View style={{ backgroundColor: '#ECF8F9', borderRadius: 10, alignItems: 'center', paddingTop: 20 }}>
              <TouchableOpacity>
                <Image style={styles.labelicon} source={Satuan} />
              </TouchableOpacity>
              <Text style={{ fontSize: 12 }}>Satuan</Text>
            </View>
            <View style={{ backgroundColor: '#ECF8F9', borderRadius: 10, alignItems: 'center', paddingTop: 20 }}>
              <TouchableOpacity>
                <Image style={styles.labelicon} source={Vip} />
              </TouchableOpacity>
              <Text style={{ fontSize: 12 }}>vip</Text>
            </View>
            <View style={{ backgroundColor: '#ECF8F9', borderRadius: 10, alignItems: 'center', paddingTop: 20 }}>
              <TouchableOpacity>
                <Image style={styles.labelicon} source={Ekspres} />
              </TouchableOpacity>
              <Text style={{ fontSize: 12 }}>Ekspres</Text>
            </View>
            <View style={{ backgroundColor: '#ECF8F9', borderRadius: 10, alignItems: 'center', paddingTop: 20 }}>
              <TouchableOpacity>
                <Image style={styles.labelicon} source={Kiloan} />
              </TouchableOpacity>
              <Text style={{ fontSize: 12 }}>Kiloan</Text>
            </View>
            <View style={{ backgroundColor: '#ECF8F9', borderRadius: 10, alignItems: 'center', paddingTop: 20 }}>
              <TouchableOpacity>
                <Image style={styles.labelicon} source={Karpet} />
              </TouchableOpacity>
              <Text style={{ fontSize: 12 }}>Karpet</Text>
            </View>
          </View>
       
      </View>

      <View style={styles.pesananaktif}>
        <Text style={styles.labelspesanan}>Pesanan Aktif</Text>
        <Pesananaktif/>
        <Pesananaktif/>
        <Pesananaktif/>
        <Pesananaktif/>
      </View>
    </View>
     </ScrollView>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
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
  Layanan: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  labels: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#080202',
    paddingTop: 10,
    paddingBottom: 10,
  },
  labelspesanan: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#080202',
    paddingVertical: 0,
    paddingHorizontal: 30
  },
  iconslayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  labelicon: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.05,
  },
  pesananaktif: {
    paddingVertical : 5 ,
    backgroundColor: '#F8F6F4',
    flex: 1,
    borderRadius: 20
  }
});
