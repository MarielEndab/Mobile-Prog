import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Avatar from './components/Avatar'; // Adjust the path
import DarkMode from './components/DarkMode'; // Adjust the path
import ExitButton from './components/ExitButton'; // Adjust the path
import InfoText from './components/InfoText'; // Adjust the path
import SectionTitle from './components/SectionTitle'; // New Section Title component
import ProfileDetails from './components/ProfileDetails'; // New Profile Details component

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <View style={styles.content}>
        <Avatar />
        <ProfileDetails name="Mariel Regine C. Endab" joined="BSIT - 3R7" darkMode={darkMode} />


        {/* Profile Section */}
        <View style={styles.section}>
          <SectionTitle title="Profile" />
          <InfoText name="Manage user" />
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <SectionTitle title="Settings" />
          <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </View>

        <ExitButton />
      </View>
      <StatusBar style={darkMode ? 'light' : 'auto'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 20,
    
  },
  section: {
    padding: 20, 
    marginBottom: 20,
    borderRadius: 10, 
    backgroundColor: '#f9f9f9', 
    elevation: 2,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    
  },

});
