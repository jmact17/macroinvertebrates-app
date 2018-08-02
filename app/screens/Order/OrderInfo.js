import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

/* Tab navigation */
/* Database */
/* Image dimensions */
/* Dropdown menu */

export default class OrderInfoScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            /* set header title*/
            title: 'Order',
        };
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.bar}>
                    <View style={styles.bartext}>
                        <Text style={styles.order}>ORDER</Text>
                         <Text style={styles.titlename}>Ephermeroptera</Text>
                        <Text style={styles.comname}>"Mayflies"</Text>
                    </View>
                    <View style={styles.baricon}>
                        <Icon name='plus' color='black' size={35}/>
                    </View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.family}
                         /* onPress={() => navigate('Ameletidae')}*/>
                        <Text style={styles.familytext}>FAMILY</Text>
                        <Text style={styles.titlename}>Ameletidae</Text>
                        <Image
                            style={styles.image}
                            source={require('./ameletus.png')}
                        />
                        <Text style={styles.genusname}>Ameletus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.family}
                        onPress={() => navigate('Baetidae')}>
                        <Text style={styles.familytext}>FAMILY</Text>
                        <Text style={styles.titlename}>Baetidae</Text>
                        <ScrollView horizontal>
                            <View style={styles.genus}>
                                <Image
                                    style={styles.image}
                                    source={require('./acentrella.png')}
                                />
                                <Text style={styles.genusname}>Acentrella</Text>
                            </View>
                            <View style={styles.genus}>
                                <Image
                                    style={styles.image}
                                    source={require('./baetis.png')}
                                />
                                <Text style={styles.genusname}>Baetis</Text>
                            </View>
                            <View style={styles.genus}>
                                <Image
                                    style={styles.image}
                                    source={require('./heterocloeon.png')}
                                />
                                <Text style={styles.genusname}>Heterocloeon</Text>
                            </View>
                        </ScrollView>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        flex: 1,
        backgroundColor: '#E7ECF0',
        flexDirection: 'row',
        padding: 15,
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    bartext: {
        flex: .8,
    },
    baricon: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    titlename: {
        fontSize: 27,
        fontFamily: 'RobotoSlab-Regular',
        color: 'black',
    },
    comname: {
        fontSize: 23,
        fontFamily: 'CormorantGaramond-Italic',
        color: '#333333',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    family: {
        height: 300,
        padding: 5,
        margin: 10,
    },
    genus: {
        marginRight: 20,
    },
    familytext: {
        fontSize: 16,
        fontFamily: 'NunitoSans-Regular',
        color: '#9b9b9b',
    },
    image: {
        flex: 1,
        width: 110,
        height: 200,
    },
    genusname: {
        fontFamily: 'Roboto-Italic',
        fontSize: 20,
        color: '#333333',
    },
});