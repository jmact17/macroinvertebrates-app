import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title1}>The Atlas of Common Freshwater</Text>
          <Text style={styles.title2}>Macroinvertebrates</Text>
          <Text style={styles.title3}>of Eastern North America</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Orders')}>
           <Text style={styles.buttontext}>Full Collection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Diagnostic Characters: Order')}>
           <Text style={styles.buttontext}>Diagnostic Characters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Glossary')}>
           <Text style={styles.buttontext}>Glossary</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.aboutbutton}
            onPress={() => this.props.navigation.navigate('About')}>
            <Text style={styles.abouttext}>About</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#343638',
},
title1: {
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 40,
    color: 'white',
},
title2: {
    fontSize: 40,
    fontFamily: 'RobotoSlab-Regular',
    textAlign: 'center',
    margin: 5,
    color: 'white',
},
title3: {
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    margin: 5,
    color: 'white',
},
buttontext: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: 'black',
},
button: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    width: 380,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 30,
},
aboutbutton: {
    alignItems: 'center',
    backgroundColor: '#343638',
    height: 80,
    width: 300,
    justifyContent: 'center',
    margin: 0,
},
abouttext: {
    fontFamily: 'Roboto', 
    fontSize: 25, 
    textAlign: 'center', 
    color: 'white'
}
});