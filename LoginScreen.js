// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener este paquete instalado

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'Cesar' && password === '123') {
      // Redirigir a la pantalla principal
      onLogin();
      navigation.navigate('Gastronomia');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          <Icon name="person" size={20} color="#2F80ED" /> Usuario:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Usuario"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          <Icon name="lock-closed" size={20} color="#2F80ED" /> Contraseña:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Contraseña"
          secureTextEntry
        />
      </View>

      <Button
        buttonStyle={styles.boton}
        title="Iniciar sesión"
        onPress={handleLogin}
        color="#2F80ED"
        borderRadius="10"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2F80ED',
  },
  input: {
    height: 40,
    borderColor: '#2F80ED',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    borderRadius: 18,
  },
  boton: {
    backgroundColor: '#2F80ED',
    borderRadius: 4,
    height: 48, // Altura del botón
  },
});

export default LoginScreen;
