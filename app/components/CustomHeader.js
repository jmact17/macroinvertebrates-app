import React, { Component } from "react";
import { Header } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Icon } from 'react-native-elements';

export default class CustomHeader extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.menu}>
            <Icon 
              name='menu'
              color='white'
              underlayColor='#34A9D0'
              size={30}
              /*onPress={() => navigation.navigate('Menu)}*/
            />
          </View>
          <View
            style={styles.textbar}>
            <Text style={styles.category}>ORDER</Text>
            <Text style={styles.sciname}>Ephemeroptera</Text>
            <Text style={styles.comname}>"Mayflies"</Text>
          </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#262626',
    borderBottomWidth: 4,
    borderTopWidth: 0,
  },
  menu: {
    height: 100,
    width: 50,
    backgroundColor: '#34A9D0',
    justifyContent: 'center',
  },
  textbar: {
    height: 100,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  category: {
    fontSize: 15,
    fontFamily: 'NunitoSans-SemiBold',
    color: 'gray',
  },
  sciname: {
      fontSize: 25,
      fontFamily: 'RobotoSlab-Regular',
      color: 'black',
  },
  comname: {
      fontSize: 25,
      fontFamily: 'CormorantGaramond-Italic',
      color: 'gray',
  },
});