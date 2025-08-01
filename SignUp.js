import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !phone || !password || !rePassword) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    if (password !== rePassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      updateProfile(userCredential.user, {
        displayName: name,
      })

      Alert.alert('Success', 'Registered!');
    } catch (error) {
      console.error('Register error: ', error);
      Alert.alert('Register Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Please fill up this form</Text>
      <TextInput 
        placeholder="Name" 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholderTextColor="#555"
      />
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        placeholderTextColor="#555"
      />
      <TextInput 
        placeholder="Phone" 
        style={styles.input} 
        value={phone} 
        onChangeText={setPhone} 
        keyboardType="phone-pad" 
        placeholderTextColor="#555"
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        placeholderTextColor="#555"
      />
      <TextInput 
        placeholder="Re-enter Password" 
        style={styles.input} 
        value={rePassword} 
        onChangeText={setRePassword} 
        secureTextEntry 
        placeholderTextColor="#555"
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} color="#2ECC71" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
    width: '100%',
    backgroundColor: '#F4F6F7',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#3498DB',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 15,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4, 
  },
  heading: {
    margin: 10,
    fontSize: 20
  }
});

export default SignUp;
