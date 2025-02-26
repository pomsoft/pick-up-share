import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SAMPLE_BOOKINGS = [
  {
    id: '1',
    date: 'Today, 2:30 PM',
    service: 'Hourly',
    duration: '3 hours',
    driver: 'John Doe',
    status: 'Upcoming',
    price: '$75.00',
  },
  {
    id: '2',
    date: 'Yesterday',
    service: 'One-way',
    duration: 'Single Trip',
    driver: 'Jane Smith',
    status: 'Completed',
    price: '$35.00',
  },
];

export default function BookingsScreen() {
  const renderBookingItem = ({ item }) => (
    <TouchableOpacity style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <Text style={styles.bookingDate}>{item.date}</Text>
        <Text style={[
          styles.statusText,
          { color: item.status === 'Upcoming' ? '#007AFF' : '#4CAF50' }
        ]}>{item.status}</Text>
      </View>
      
      <View style={styles.bookingDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="car-outline" size={20} color="#666" />
          <Text style={styles.detailText}>{item.service} • {item.duration}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="person-outline" size={20} color="#666" />
          <Text style={styles.detailText}>{item.driver}</Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Total</Text>
        <Text style={styles.priceAmount}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
      </View>
      
      <FlatList
        data={SAMPLE_BOOKINGS}
        renderItem={renderBookingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  listContainer: {
    padding: 15,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  bookingDate: {
    fontSize: 16,
    fontWeight: '600',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  bookingDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
});