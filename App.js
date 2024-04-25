// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import GastronomyScreen from './GastronomyScreen';
import TourismScreen from './TourismScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  // Estado para verificar si el usuario ha iniciado sesión
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Función para cambiar el estado de inicio de sesión
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // Si el usuario ha iniciado sesión, mostrar la navegación por pestañas
        <Tab.Navigator>
          <Tab.Screen
            name="Gastronomia"
            component={GastronomyScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="restaurant" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Eventos"
            component={MainScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Turismo"
            component={TourismScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="compass" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        // Si el usuario no ha iniciado sesión, mostrar la pantalla de inicio de sesión
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

export default App;
