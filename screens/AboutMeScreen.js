import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/angelo.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Angelo Andres Vargas Compre</Text>
      <Text style={styles.contact}>Contactame:</Text>
      <Text style={styles.contactInfo}>Correo electrónico: vargascompre@gmail.com</Text>
      <Text style={styles.contactInfo}>Teléfono: 809-502-3403</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contact: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AboutMeScreen;
