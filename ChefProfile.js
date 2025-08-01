import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Alert } from 'react-native';

export default function ChefProfile() {

  const handleRequest = (chefName) => {
    Alert.alert('Request Sent', `You have requested ${chefName}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollbody}>
      <Text style={styles.header}>Top Chefs</Text>

      <View style={styles.profileBox}>
        <Image source={require('./assets/Neel.jpg')} style={styles.image}/>
        <Text style={styles.name}>Chef Robiul Islam Apu</Text>
        <Text style={styles.rating}>Rating: ⭐⭐⭐⭐⭐</Text>
        <Text style={styles.info}>Specialties: Desserts, French Cuisine</Text>
        <Text style={styles.info}>Availability: Sun - Wed, 2pm - 10pm</Text>
        <Text style={styles.reviewLabel}>Reviews:</Text>
        <Text style={styles.review}>“Her pastries are a dream come true!”</Text>
        <Text style={styles.review}>“Best tiramisu I’ve ever had!”</Text>
        <View style={styles.buttonContainer}>
          <Button title="Request This Chef" onPress={() => handleRequest('Chef Chef Robiul Islam Apu')} color="#FF6B3A" />
        </View>
      </View>

      <View style={styles.profileBox}>
        <Image source={require('./assets/tahsin (2).png')} style={styles.image} />
        <Text style={styles.name}>Chef Tahsin</Text>
        <Text style={styles.rating}>Rating: ⭐⭐⭐⭐☆</Text>
        <Text style={styles.info}>Specialties: Italian, Vegan</Text>
        <Text style={styles.info}>Availability: Mon-Fri, 10am - 9pm</Text>
        <Text style={styles.reviewLabel}>Reviews:</Text>
        <Text style={styles.review}>“Amazing Kebab and very professional.”</Text>
        <Text style={styles.review}>“Prompt, clean, and delicious food.”</Text>
        <View style={styles.buttonContainer}>
          <Button title="Request This Chef" onPress={() => handleRequest('Chef Tahsin')} color="#FF6B3A" />
        </View>
      </View>

      <View style={styles.profileBox}>
        <Image source={require('./assets/Akash.jpg')} style={styles.image}/>
        <Text style={styles.name}>Chef Dip Bormon Akash</Text>
        <Text style={styles.rating}>Rating: ⭐⭐⭐⭐☆</Text>
        <Text style={styles.info}>Specialties: Bangladeshi, Kebab</Text>
        <Text style={styles.info}>Availability: Sat - Fri, 10am - 9pm</Text>
        <Text style={styles.reviewLabel}>Reviews:</Text>
        <Text style={styles.review}>“Amazing pasta and very professional.”</Text>
        <Text style={styles.review}>“Prompt, clean, and delicious food.”</Text>
        <View style={styles.buttonContainer}>
          <Button title="Request This Chef" onPress={() => handleRequest('Chef Dip Bormon Akash')} color="#FF6B3A" />
        </View>
      </View>

    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  scrollbody: {
    marginTop: 50,
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
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  rating: {
    marginBottom: 6,
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  reviewLabel: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#444',
  },
  review: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 4,
  },
  buttonContainer: {
    marginTop: 12,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
