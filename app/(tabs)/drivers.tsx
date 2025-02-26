import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DRIVERS = [
  {
    id: '1',
    name: 'Michael Chen',
    photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
    rating: 4.9,
    experience: '5 years',
    languages: ['English', 'Mandarin'],
    totalRides: 1250,
    available: true,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 4.8,
    experience: '3 years',
    languages: ['English', 'Spanish'],
    totalRides: 850,
    available: true,
  },
  {
    id: '3',
    name: 'David Williams',
    photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400',
    rating: 4.7,
    experience: '4 years',
    languages: ['English', 'French'],
    totalRides: 1100,
    available: false,
  },
];

export default function DriversScreen() {
  const renderDriver = ({ item }) => (
    <TouchableOpacity style={styles.driverCard}>
      <View style={styles.driverHeader}>
        <Image source={{ uri: item.photo }} style={styles.driverPhoto} />
        <View style={styles.driverInfo}>
          <Text style={styles.driverName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.totalRides}>({item.totalRides} rides)</Text>
          </View>
        </View>
        <View style={[styles.statusBadge, !item.available && styles.unavailableBadge]}>
          <Text style={[styles.statusText, !item.available && styles.unavailableText]}>
            {item.available ? 'Available' : 'Busy'}
          </Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Ionicons name="time-outline" size={20} color="#666" />
          <Text style={styles.detailText}>{item.experience} experience</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="language-outline" size={20} color="#666" />
          <Text style={styles.detailText}>{item.languages.join(', ')}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.bookButton, !item.available && styles.disabledButton]}
        disabled={!item.available}>
        <Text style={[styles.bookButtonText, !item.available && styles.disabledButtonText]}>
          Book Driver
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Available Drivers</Text>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={20} color="#007AFF" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={DRIVERS}
        renderItem={renderDriver}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
    padding: 8,
    borderRadius: 8,
  },
  filterText: {
    color: '#007AFF',
    marginLeft: 4,
    fontWeight: '500',
  },
  listContainer: {
    padding: 15,
  },
  driverCard: {
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
  driverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  driverInfo: {
    flex: 1,
    marginLeft: 15,
  },
  driverName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalRides: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  statusBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  unavailableBadge: {
    backgroundColor: '#FFEBEE',
  },
  statusText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  unavailableText: {
    color: '#F44336',
  },
  detailsContainer: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#999',
  },
});