import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const TabItem = ({ onPress, onLongPress, label, isFocused }) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
      <Icon
        name={
          label === 'Home'
            ? isFocused
              ? 'home'
              : 'home-outline'
            : label === 'Pesanan'
            ? isFocused
              ? 'cart'
              : 'cart-outline'
            : label === 'Akun'
            ? isFocused
              ? 'person'
              : 'person-outline'
            : 'home-outline'
        }
        size={20}
        color={isFocused ? '#088395' : '#526D82' }
      />
      <Text style={{ color: isFocused ? '#025464' : '#025464' }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
  }
});
