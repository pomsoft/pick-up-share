import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SAMPLE_RIDES = [
  {
    id: '1',
    date: 'Today, 2:30 PM',
    from: '123 Main St',
    to: '456 Market St',
    price: '$25.50',
    status: 'Completed',
  },
  {
    id: '2',
    date: 'Yesterday, 4:15 PM',
    from: '789 Oak Ave',
    to: '321 Pine St',
    price: '$18.75',
    status: 'Completed',
  },
];

export default function RidesScreen() {
  const renderRideItem = ({ item }) => (
    <TouchableOpacity style={styles.rideCard}>
      <View style={styles.rideHeader}>
        <Text style={styles.rideDate}>{item.date}</Text>
        <Text style={styles.rideStatus}>{item.status}</Text>
      </View>
      <View style={styles.routeContainer}>
        <View style={styles.routeInfo}>
          <View style={styles.locationContainer}>
            <View style={styles.dot} />
            <Text style={styles.locationText}>{item.from}</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.locationContainer}>
            <View style={[styles.dot, styles.destinationDot]} />
            <Text style={styles.locationText}>{item.to}</Text>
          </View>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Rides</Text>
      </View>
      <FlatList
        data={SAMPLE_RIDES}
        renderItem={renderRideItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  rideCard: {
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
  rideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  rideDate: {
    fontSize: 14,
    color: '#666',
  },
  rideStatus: {
    fontSize: 14,
    color: '#4CAF50',
  },
  routeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeInfo: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginRight: 10,
  },
  destinationDot: {
    backgroundColor: '#4CAF50',
  },
  verticalLine: {
    width: 2,
    height: 20,
    backgroundColor: '#E0E0E0',
    marginLeft: 4,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
});