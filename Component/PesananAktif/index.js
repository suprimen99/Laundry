import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IconsAkun, Logo, Setrika, Nota } from '../../assets';

const Pesananaktif = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image source={Nota} style={{width: 20, height : 20}}/>
        <Text style={{paddingLeft : 4}}>Pesanan Aktif</Text>
      </TouchableOpacity>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Pesananaktif;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#ffffff",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginTop: windowWidth * 0.03,
  },
});
