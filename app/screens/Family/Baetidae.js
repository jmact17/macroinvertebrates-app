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

export default class BaetidaeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            /* set header title*/
            title: 'Family',
        };
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.orderbar}>
                    <View style={styles.bartext}>
                        <Text style={styles.titlename}>Order Ephermeroptera</Text>
                        <Text style={styles.comname}>"Mayflies"</Text>
                    </View>
                    <View style={styles.baricon}>
                        <Icon name='plus' color='black' size={35}/>
                    </View>
                </View>
                <View style={styles.familybar}>
                    <View style={styles.bartext}>
                        <Text style={styles.titlename}>Family Baetidae</Text>
                    </View>
                    <View style={styles.baricon}>
                        <Icon name='plus' color='black' size={35}/>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titlename}>Genera</Text>
                    <View style={styles.genera}>
                        <TouchableOpacity style={styles.genus}
                            /* onPress={() => navigate('Ameletidae')}*/>
                            <Image
                                style={styles.image}
                                source={require('../Order/acentrella.png')}
                            />
                            <Text style={styles.genusname}>Acentrella</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.genus}
                            /* onPress={() => navigate('Baetis')}*/>
                            <Image
                                style={styles.image}
                                source={require('../Order/baetis.png')}
                            />
                            <Text style={styles.genusname}>Baetis</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.genus}
                            /* onPress={() => navigate('Heterocloeon')}*/>
                            <Image
                                style={styles.image}
                                source={require('../Order/heterocloeon.png')}
                            />
                            <Text style={styles.genusname}>Heterocloeon</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    orderbar: {
        flex: 1,
        backgroundColor: '#E7ECF0',
        flexDirection: 'row',
        padding: 15,
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    familybar: {
        flex: 1,
        backgroundColor: '#E7ECF0',
        flexDirection: 'row',
        padding: 15,
        height: 70,
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
        height: 500, /* how to get white to extend all the way down? */
        padding: 15,
        backgroundColor: 'white',
    },
    genera: {
        marginTop: 5,
        flexDirection: 'row',
    },
    genus: {
        marginRight: 20,
        height: 300,
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