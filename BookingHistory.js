import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const bookings = [
  { id: 1, dish: 'Biryani', status: 'Completed' },
  { id: 2, dish: 'Kebab', status: 'Confirmed' },
  { id: 3, dish: 'Hilsa', status: 'Pending' },
];

export default function BookingHistory() {
  const handleAction = (action, dish) => {
    Alert.alert(`${action}`, `${dish} booking ${action.toLowerCase()}ed.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.header}>Booking History</Text>

      {bookings.map((booking) => (
        <View key={booking.id} style={styles.card}>
          <Text style={styles.dishName}>{booking.dish}</Text>
          <Text style={[styles.status, getStatus(booking.status)]}>
            Status: {booking.status}
          </Text>

          {booking.status === 'Confirmed' && (
            <View style={styles.buttonGroup}>
              <View style={styles.buttonWrapper}>
                <Button
                  title="Reschedule"
                  onPress={() => handleAction('Reschedule', booking.dish)}
                  color="#FF8C42"
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  title="Cancel"
                  onPress={() => handleAction('Cancel', booking.dish)}
                  color="#D9534F"
                />
              </View>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const getStatus = (status) => {
  switch (status) {
    case 'Completed':
      return { color: 'green' };
    case 'Confirmed':
      return { color: '#FF8C42' };
    case 'Pending':
      return { color: '#FFA500' };
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  scrollContainer: {
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
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FFA07A',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  status: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
