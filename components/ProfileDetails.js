import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileDetails = ({ name, joined, darkMode }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, { color: darkMode ? '#fff' : '#444' }]}>{name}</Text>
      <Text style={[styles.joined, { color: darkMode ? '#fff' : '#444' }]}>{joined}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  joined: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProfileDetails;
