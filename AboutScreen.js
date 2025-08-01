import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,} from 'react-native';

export function AboutScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>Welcome to ChefFinder</Text>
        <Text style={styles.subtitle}>Find & hire top chefs near you</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌟 Featured Chefs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3,4,5,6,7].map((_, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.chefName}>
                Chef {['Tahsin', 'Dip', 'Apu', 'Rafi', 'Habibur','Rakib','Bishal'][i]}
              </Text>
              <Text style={styles.chefDesc}>5★ - Bangladeshi Cuisine</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testimonials</Text>
        {[
            '“Fantastic culinary experience!” - Nayem',
            '“Highly professional chefs.” - Mariya',
             "“A true culinary experience from start to finish.” - Tasnia",
            "“Delicious meals delivered right on time!” - Habibur",
            "“The chef was friendly and very skilled.” - Rafi",
            "“My dinner party was a hit thanks to the amazing food!” - Rakib",
            "“Restaurant-quality dishes at home loved it!” - Rukon",
            
        ].map((quote, i) => (
          <Text key={i} style={styles.testimonial}>
            ❝ {quote} ❞
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50 
    },
  banner: { 
    alignItems: 'center',
    marginBottom: 20 },
  title: 
  { fontSize: 24,
     fontWeight: 'bold' },
  subtitle:{
     fontSize: 16, color: 'gray'
    },
  requestButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  requestButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
     marginTop: 20 
    },
  sectionTitle: {
    
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 120,
  },
  chefName: {
     fontWeight: 'bold' 
    },
  chefDesc: { 
    fontSize: 12, 
    color: 'gray' 
  },
  testimonial: {
    fontStyle: 'italic',
    backgroundColor: '#e8e8e8',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
});
