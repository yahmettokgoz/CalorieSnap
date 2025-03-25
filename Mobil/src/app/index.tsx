
import {StyleSheet,Text,View} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Yiyeceklerin Görünümü */}
      <View 
      style={{
        backgroundColor: 'gainsboro',
        padding:10,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        


        }}>
          <View style={{flex:1,gap:5,}}>
              <AntDesign name="pluscircleo" size={24} color="green" />
              <Text style={{fontWeight:'bold',fontSize:16}}>Pizza</Text>
              <Text style={{color:'dimgray'}}>Calories:350,Dominos</Text>
              </View>
              <Text>Protein: 36g</Text>
              <Text>Carbs: 42g</Text>
              <Text>Fat: 10g</Text>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});
