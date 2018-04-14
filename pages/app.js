import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './home';

const fetchDataClass = StackNavigator ({
    Home: { screen: HomeScreen },
});

export default fetchDataClass;