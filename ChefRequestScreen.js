import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Alert, Text } from 'react-native';
import {collection, addDoc} from 'firebase/firestore';
import {db,auth} from './firebase';

export default function ChefRequestScreen() {
  const [mealType, setMealType] = useState('');
  const [dish, setDish] = useState('');
  const [people, setPeople] = useState('');
  const [datetime, setDatetime] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async () => {
    if (!mealType || !dish || !people || !datetime || !address) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'chefRequestScreen'),{
      mealType,
      recipe: dish,
      peopleCount: parseInt(people),
      datetime,
      address,
      instructions,

      })
       console.log('Request added:');
       Alert.alert('Success', 'Chef request submitted!');
    } catch(error) {
      console.error('Error adding document', error);
      Alert.alert('Error', 'Failed to submit request');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>Request a Personal Chef</Text>
      <TextInput
        placeholder="Meal Type (Breakfast, Lunch, Dinner)"
        style={styles.input}
        value={mealType}
        onChangeText={setMealType}
      />
      <TextInput
        placeholder="Recipe or Dish"
        style={styles.input}
        value={dish}
        onChangeText={setDish}
      />
      <TextInput
        placeholder="Number of People"
        keyboardType="numeric"
        style={styles.input}
        value={people}
        onChangeText={setPeople}
      />
      <TextInput
        placeholder="Date & Time"
        style={styles.input}
        value={datetime}
        onChangeText={setDatetime}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Special Instructions (optional)"
        style={[styles.input, styles.multiline]}
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit Request" onPress={handleSubmit} color="#FF6B3A" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF5F1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6B3A',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FFA07A',
    marginBottom: 12,
    padding: 14,
    borderRadius: 10,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
