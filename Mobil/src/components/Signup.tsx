import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler eşleşmiyor!');
      return;
    }

    if (name && email && password) {
      Alert.alert('Kayıt Başarılı!', 'Artık giriş yapabilirsiniz.');
      navigation.navigate('Login'); // Kayıttan sonra giriş sayfasına yönlendirir
    } else {
      Alert.alert('Hata', 'Tüm alanları doldurunuz!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <TextInput 
        placeholder="Adınız" 
        style={styles.input} 
        value={name}
        onChangeText={setName}
      />

      <TextInput 
        placeholder="E-posta Adresi" 
        style={styles.input} 
        value={email}
        onChangeText={setEmail}
      />

      <TextInput 
        placeholder="Şifre" 
        style={styles.input} 
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput 
        placeholder="Şifreyi Tekrar Girin" 
        style={styles.input} 
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Signup;
