import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { doc, setDoc, } from 'firebase/firestore';
import { db } from './firebase';

export default function UserProfile() {
  const [name, setName] = useState('Tahsin');
  const [address, setAddress] = useState('Lamabazar point, Ali complex');
  const [preferences, setPreferences] = useState('Kebab');

  const handleSave = async () => {
    try {
      await setDoc(doc(db, 'users', 'userProfile'),{
        name,address,preferences
    });
     Alert.alert('Profile Updated', 'Your changes have been saved!');
    } catch (error){
      console.log('Error saving profile', error);
      Alert.alert('Error', 'Failed to save profile. Please try again');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>User Profile</Text>

      <View style={styles.profileBox}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input}
         value={name}
          onChangeText={setName} />

        <Text style={styles.label}>Address Book:</Text>
        <TextInput style={styles.input}
         value={address} 
         onChangeText={setAddress} />

        <Text style={styles.label}>Saved Preferences:</Text>
        <TextInput style={styles.input} 
        value={preferences} 
        onChangeText={setPreferences} />

        <View style={styles.buttonContainer}>
          <Button title="Save Changes" 
          onPress={handleSave} 
          color="#FF6B3A" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: '100',
    backgroundColor: '#FFF5F1',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6B3A',
    marginBottom: 20,
  },
  profileBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FFA07A',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#444',
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 12,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
