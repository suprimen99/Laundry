import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonIcon = ({ title }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Ionicons name="card-outline" size={25} color="#22A699" />
            <Text style={styles.titleText}>Add Saldo</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Ionicons name="logo-bitcoin" size={25} color="#F2BE22" />
            <Text style={styles.titleText}>Get Point</Text>
          </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginLeft: 10,
  },
  titleText: {
    color: '#2B2A4C',
    fontSize: 8,
    marginTop: 4,
  },
});
