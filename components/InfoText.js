import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const InfoText = ({ name }) => {
  return (
    <TouchableOpacity style={styles.infoContainer}>
      <View style={styles.row}>
        <FontAwesome name="info-circle" size={24} color="black" style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 75, 
  },
  name: {
    fontSize: 20,
    color: '#333',
  },
});

export default InfoText;
