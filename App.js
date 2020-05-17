import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Weather from './Weather';

const API_KEY = '8c6c69852e6bb1477831f64dad192fa3';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        this.setState({
          error,
        });
      },
    );
  }
  getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        this.setState({
          isLoaded: true,
          temperature: json.main.temp,
          name: json.weather[0].main,
        });
      });
  };
  render() {
    const {isLoaded, error, temperature, name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather temp={Math.floor(temperature - 273.15)} weatherName={name} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
  },
});
