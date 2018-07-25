import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  Dimensions,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const width = Dimensions.get('window').width;

// Row data (hard-coded)
const rows = {
  'A': [
    {id: 0, text: 'aa'},
    {id: 1, text: 'ab'},
    {id: 2, text: 'ac'},
  ],
  'B': [
    {id: 3, text: 'ba'},
    {id: 4, text: 'bb'},
  ],
}

// Row and section comparison functions
const rowHasChanged = (r1, r2) => r1.id !== r2.id
const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

export default class GlossaryScreen extends Component {
    static navigationOptions = {
      /* set header title */
      title: 'Glossary',
    };
    
    state = {
      dataSource: ds.cloneWithRowsAndSections(rows)
    }
  
    renderRow = (rowData, sectionId) => {
      return (
          <Text style={styles.row}>
            {rowData.text}
          </Text>

      )
    }
  
    renderSectionHeader = (sectionRows, sectionId) => {
      return (
        <Text style={styles.header}>
          {sectionId}
        </Text>
      )
    }
  
    render() {
      return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
        />
      )
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        padding: 5,
        paddingLeft: 15,
        marginBottom: 5,
        backgroundColor: '#e6e6e6',
        color: 'black',
        fontWeight: 'bold',
    },
    term: {
        width: width * 0.3, /* HOW TO DO TEXT VS VIEW?? */
        margin: 10,
        paddingLeft: 5,
        fontFamily: 'NunitoSans-Bold', 
        fontSize: 15, 
        textAlign: 'left', 
        color: 'black',
    },
    row: { /*definition*/
        margin: 10,
        paddingLeft: 5,
        fontFamily: 'NunitoSans-Regular', 
        fontSize: 15, 
        textAlign: 'left', 
        color: 'black'
    },
});