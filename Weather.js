import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

function Weather({temp}) {
  return (
    <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>
      <View style={styles.upper}>
        <Icon name="ios-thunderstorm" color="white" size={144}></Icon>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>Raining like a MF</Text>
        <Text style={styles.subTitle}>For more info look outsie</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    marginTop: 10,
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 24,
    marginBottom: 24,
  },
  title: {
    marginBottom: 10,
    color: 'white',
    fontSize: 38,
    fontWeight: '300',
  },
  subTitle: {
    color: 'white',
    fontSize: 24,
  },
});
