import {View,Text,StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';



//  TypeScript interface tanımlaması (Artık protein, carb ve fat içeriyor)
interface FoodItem {
    label: string;
    Calories: number;
    brand: string;
    protein: number;
    carb: number;
    fat: number;
  }
  
  const FoodListItem = ({ item }: { item: FoodItem }) => { //  Tür belirtildi
    return (
      <View 
        style={styles.container} //  Stil uygulandı   
        
      >
        <View style={{ flex: 1, gap: 5 }}>
          <AntDesign name="pluscircleo" size={24} color="green" />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
          <Text style={{ color: 'dimgray' }}>{item.Calories} kalori, {item.brand}</Text>
        </View>
        
        {/* Makro değerleri sağda alt alta göstermek */}
        <View style={{ alignItems: 'flex-end' }}>
          <Text>Protein: {item.protein}g</Text>
          <Text>Karbonhidrat: {item.carb}g</Text>
          <Text>Yağ: {item.fat}g</Text>
        </View>
      </View>
    )
  }

  

  const styles=StyleSheet.create({
    container: {
          backgroundColor: '#f6f6f8',
          padding: 10,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
    }

  })

  export default FoodListItem;