import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import FoodListItem from './FoodListItem';  // Eğer bu bileşeni kullanıyorsan

const foodItems = [
  { label: 'Pizza', Calories: 350, brand: 'Dominos', protein: 36, carb: 42, fat: 10 },
  { label: 'Cheese Burger', Calories: 500, brand: 'McDonalds', protein: 30, carb: 50, fat: 20 },
  { label: 'Salata', Calories: 200, brand: 'Ev yapımı', protein: 10, carb: 15, fat: 5 },
  { label: 'Sushi', Calories: 300, brand: 'Japon restoranı', protein: 25, carb: 35, fat: 8 },
  { label: 'Pasta', Calories: 400, brand: 'İtalyan restoranı', protein: 15, carb: 60, fat: 12 },
  { label: 'Nugget', Calories: 250, brand: 'KFC', protein: 40, carb: 0, fat: 10 },
  { label: 'Makarna', Calories: 350, brand: 'Ev yapımı', protein: 12, carb: 70, fat: 5 },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert('Çıkış Yapıldı', 'Başarıyla çıkış yapıldı.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Hata', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ana Sayfa</Text>

      {/* Çıkış Yap Butonu */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
        <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
      </TouchableOpacity>

      {/* Yiyecek Listesi */}
      <FlatList 
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />} 
        keyExtractor={(item) => item.label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
