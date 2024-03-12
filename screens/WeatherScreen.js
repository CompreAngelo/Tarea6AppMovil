import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        'http://api.weatherapi.com/v1/current.json?key=a5016ec601294d3f941183514241203&q=Santo Domingo&aqi=no'
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {weatherData ? (
        <View>
          <Text style={{ fontSize: 24 }}>Clima en República Dominicana</Text>
          <Text style={{ fontSize: 18 }}>Ciudad: {weatherData.location.name}</Text>
          <Text style={{ fontSize: 18 }}>Temperatura: {weatherData.current.temp_c}°C</Text>
          <Text style={{ fontSize: 18 }}>Descripción: {weatherData.current.condition.text}</Text>
        </View>
      ) : (
        <Text>Cargando el clima...</Text>
      )}
    </View>
  );
};

export default WeatherScreen;
