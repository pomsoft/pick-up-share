import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const SERVICES = [
  {
    id: '1',
    title: 'Hourly',
    description: 'Book a driver by the hour',
    icon: 'time',
    price: 'From $25/hour',
  },
  {
    id: '2',
    title: 'One-way',
    description: 'Single trip in your car',
    icon: 'arrow-forward',
    price: 'From $35',
  },
  {
    id: '3',
    title: 'Round Trip',
    description: 'Return journey with same driver',
    icon: 'repeat',
    price: 'From $60',
  },
];

export default function BookScreen() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#007AFF', '#00A3FF']}
        style={styles.header}>
        <Text style={styles.welcomeText}>Book Your Driver</Text>
        <Text style={styles.subText}>Professional chauffeurs for your car</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Select Service Type</Text>
        
        {SERVICES.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={[
              styles.serviceCard,
              selectedService === service.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedService(service.id)}>
            <View style={styles.serviceIcon}>
              <Ionicons name={service.icon} size={24} color="#007AFF" />
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>{service.price}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Featured Drivers</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.driversScroll}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.driverCard}>
              <Image
                source={{ uri: `https://images.unsplash.com/photo-${i === 1 ? '1633332755192-727a05c4013d' : i === 2 ? '1570295999919-56ceb5ecca61' : '1568602471122-7832951cc4c5'}?w=200` }}
                style={styles.driverImage}
              />
              <Text style={styles.driverName}>John Doe {i}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.{8 + i}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 10,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCard: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#f0f9ff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
  priceTag: {
    backgroundColor: '#f0f9ff',
    padding: 8,
    borderRadius: 8,
  },
  priceText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  driversScroll: {
    marginBottom: 20,
  },
  driverCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginRight: 15,
    alignItems: 'center',
    width: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  driverImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  driverName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});