import { StyleSheet, Text, View,FlatList,TextInput, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FoodListItem from '../components/FoodListItem';
import Login from '../components/Login';
import {useState} from 'react';

const foodItems= [
  { label: 'Pizza', Calories: 350, brand: 'Dominos', protein: 36, carb: 42, fat: 10 },
  { label: 'Cheese Burger', Calories: 500, brand: 'McDonalds', protein: 30, carb: 50, fat: 20 },
  { label: 'Salata', Calories: 200, brand: 'Ev yapımı', protein: 10, carb: 15, fat: 5 },
  { label: 'Sushi', Calories: 300, brand: 'Japon restoranı', protein: 25, carb: 35, fat: 8 },
  { label: 'Pasta', Calories: 400, brand: 'İtalyan restoranı', protein: 15, carb: 60, fat: 12 },
  { label: 'Nugget', Calories: 250, brand: 'KFC', protein: 40, carb: 0, fat: 10 },
  { label: 'Makarna', Calories: 350, brand: 'Ev yapımı', protein: 12, carb: 70, fat: 5 },

]

export default function App() {

const [arama,setArama]=useState('');

const aramaYap=()=>{
  console.warn('Ara:', arama);

  setArama(''); //  Arama yapıldıktan sonra arama çubuğunu temizle
}

  return (
    <View style={styles.container}>
      <TextInput
       value={arama} 
       onChangeText={setArama}
        placeholder="Yiyecek ara..." 
        style={styles.input}
        />

        {arama ?  <Button title="Ara" onPress={aramaYap} /> : null}

       

      <FlatList 
         data={foodItems} //  Veri kaynağı
         renderItem={({ item }) => <FoodListItem item={item} />} //  Her bir öğeyi render et
      
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  input:{
    backgroundColor:'#F2f2f2',
    padding:10,
    borderRadius:20,
  }

});
