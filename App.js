import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';
import {RootStack} from './app/router.js';

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
