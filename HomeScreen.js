import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>

  <Text style={styles.text}>Home</Text>

    <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('About')}>
      <Text style={styles.buttonText}>AboutScreen</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('ChefRequest')}>
      <Text style={styles.buttonText}>ChefRequestScreen</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('ChefProfile')}>
      <Text style={styles.buttonText}>ChefProfile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('BookingHistory')}>
      <Text style={styles.buttonText}>BookingHistory</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('UserProfile')}>
      <Text style={styles.buttonText}>UserProfile</Text>
    </TouchableOpacity>
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F4F6F7',
  },
  text: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  buttonWrapper: {
    backgroundColor: "#34495E",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    alignItems: 'center', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default HomeScreen;