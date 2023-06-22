import { StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import Buttonicon from '../Buttomicons'

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasisaldo}>
        <View style={styles.text}>
        <Text style={styles.labelsaldo}>Saldo</Text>
        <Text style={styles.valuesaldo}>Rp. 100000</Text>
        </View>
        <View style={styles.text}>
        <Text style={styles.labelpoint}>Antar Paket</Text>
        <Text style={styles.valuepoint}>136 points</Text>
        </View>
      </View>
        <View style={styles.ButtonAksi}>
          <Buttonicon  name="card-outline" size={20} color="#22A699" />
        </View>
    </View>
  )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container : {
    backgroundColor : "#ffffff",
    padding : 20,
    marginHorizontal: 30,
    borderRadius : 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginTop : -windowWidth*0.05,
    flexDirection : 'row'
  },
  text : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  informasisaldo : {
    width : '60%',
  },
  labelsaldo : {
    fontSize : 16,
    fontWeight : 'bold',
    color: 'black'
  },
  valuesaldo : {
    fontSize : 16,
    fontWeight : 'bold',
  },
  labelpoint : {
    fontSize: 12,
    color: 'black',
    fontWeight : 'bold'
  },
  valuepoint : {
    fontSize: 12,
  },
  Buttonicon : {
    marginRight : 10
  },
  ButtonAksi: {
    paddingLeft : 20
  }
})