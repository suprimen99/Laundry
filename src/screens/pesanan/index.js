import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pesanan = () => {
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

export default Pesanan

const styles = StyleSheet.create({})