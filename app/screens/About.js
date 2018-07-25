import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

export default class AboutScreen extends Component {
    static navigationOptions = {
      /* set header title */
      title: 'About',
    };
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>This is the About page.</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#e6e6e6'
    },
    text: {
        fontFamily: 'Roboto', 
        fontSize: 15, 
        textAlign: 'left', 
        color: 'black'
    }
});