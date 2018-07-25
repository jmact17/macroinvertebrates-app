import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

export default class DiagCharsScreen extends Component {
    /* set header title*/
    static navigationOptions = {
      title: 'Diagnostic Characters: Order',
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Coleoptera &quot;Adult Beetles&quot;"
            onPress={() => this.props.navigation.navigate('DiagCharColeopteraAdult')}
          />
      
        </View>
      );
    }
  }