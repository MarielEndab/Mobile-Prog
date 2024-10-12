import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <View style={styles.optionContainer}>
      <FontAwesome name="moon-o" size={24} color="black" style={styles.icon} />
      <Text style={styles.label}>Dark Mode</Text>
      <Switch value={darkMode} onValueChange={toggleDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    color: '#333',
    
  },
});

export default DarkMode;
